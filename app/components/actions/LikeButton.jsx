'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Icon } from '../ui/Icon/Icon';
import { LikeIcon } from '../ui/Icon/icons';
import { Button } from '../ui/Button/Button';
import { AppLink } from '../ui/AppLink/AppLink'; 

export const LikeButton = () => {
    const params = useParams();
    const [liked, setLiked] = useState(() => {
        if (typeof window !== 'undefined') return false;
        return localStorage.getItem(params.slug) === 'true';
    });

    useEffect(() => {
        localStorage.setItem(params.slug, liked);
    }, [params.slug, liked]);

    return (
        <AppLink 
            href="#like"
            onClick={(e) => {
                e.preventDefault();
                setLiked(prev => !prev);    
                console.log('Like button clicked! New state:', !liked);
            }}
        >
            <Button variant="secondary" size="md">
                <Icon size="lg" color="#111111">
                    <LikeIcon />
                </Icon>
                <span>{liked ? 'Liked' : 'Like'}</span>
            </Button>
        </AppLink>

    );
}