import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Button from '@/components/ui/Button';
import Dropdown from '@/components/ui/Dropdown';
import Head from 'next/head';
import { useState, useEffect } from 'react';

export default function Home() {
    return (
        <>
            <Hero />
            <Services />
        </>
    );
}
