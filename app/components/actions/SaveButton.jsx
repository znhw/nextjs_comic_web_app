'use client';
import { useState, useEffect } from 'react'; 
import { useParams } from 'next/navigation';
import { Icon } from '../ui/Icon/Icon';
import { SaveIcon } from '../ui/Icon/icons';
import { Button } from '../ui/Button/Button';
import { AppLink } from '../ui/AppLink/AppLink'; 

export const SaveButton = () => {
    const params = useParams();

    const [saved, setSaved] = useState(() => {
        if (typeof window !== 'undefined') return false;

        return localStorage.getItem(params.slug) === 'true';
    });

    useEffect(() => {
        localStorage.setItem(params.slug, saved);
    }, [params.slug, saved]);
    

    return (
        <AppLink 
            href="#save"
            onClick={(e) => {
                e.preventDefault();
                setSaved(prev => !prev);
                console.log('Save button clicked! New state:', !saved);
            }}
        >
            <Button variant="secondary" size="md">
                <Icon size="lg" color="#111111">
                    <SaveIcon />
                </Icon>
                <span>{saved ? 'Saved' : 'Save'}</span>
            </Button>
        </AppLink>

    );
}