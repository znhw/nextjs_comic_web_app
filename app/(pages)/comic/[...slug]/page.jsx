'use client';
import TopNav from '../../../components/navigation/TopNav';
import { LikeButton } from '../../../components/actions/LikeButton';
import { SaveButton } from '../../../components/actions/SaveButton';

export default function TitlePage({}) {
  return (
    <div>
        <TopNav />
        <h1>Comic Page</h1>
        <p>This is a placeholder for the comic page content.</p>
        <LikeButton />
        <SaveButton /> 
      
    </div>
  );
}