import Brands from '@/components/home/Brands';
import Hero from '@/components/home/Hero';
import Insights from '@/components/home/Insights';
import Services from '@/components/home/Services';
import Button from '@/components/ui/Button';
import Dropdown from '@/components/ui/Dropdown';
import Head from 'next/head';
import { useState, useEffect } from 'react';

export default function Home() {
    return (
        <>
            <Head>
                <title>Rubrec - From Idea to Digital Product</title>
                <meta
                    name="description"
                    content="Rubrec, strateji, tasarım, yazılım geliştirme, yapay zeka çözümleri ve bulut altyapısı alanlarında uçtan uca dijital ürünler geliştiren bir teknoloji şirketidir. Fikirden lansmana kadar, işletmelerin dijital dönüşüm yolculuğuna rehberlik eder."
                />
            </Head>
            <Hero />
            <Services />
            <Brands />
            <Insights />
        </>
    );
}
