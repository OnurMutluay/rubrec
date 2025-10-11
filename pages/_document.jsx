import { Html, Head, Main, NextScript } from 'next/document';
import { linkedinInsightTag, linkedinInsightScript, linkedinNoScript } from '@/lib/linkedinInsight';
import { googleAnalyticsTag } from '@/lib/googleAnalytics';
import { microsoftClarityTag } from '@/lib/microsoftClarity';
import { facebookNoScript, facebookPixelTag } from '@/lib/facebookPixel';
import { redditPixelTag } from '@/lib/redditPixel';
import { googleTagManagerTag } from '@/lib/googleTagManager';
import Header from '@/components/layout/Header';

export default function Document() {
    return (
        <Html>
            <Head />
            {/* Linkedin Insight */}
            <script dangerouslySetInnerHTML={{ __html: linkedinInsightTag }} />
            <script dangerouslySetInnerHTML={{ __html: linkedinInsightScript }} />
            <noscript dangerouslySetInnerHTML={{ __html: linkedinNoScript }} />

            {/* Google Analytics */}
            <script dangerouslySetInnerHTML={{ __html: googleAnalyticsTag }} />
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-EC93NV4KFJ" />

            {/* Microsoft Clarity */}
            <script dangerouslySetInnerHTML={{ __html: microsoftClarityTag }} />

            {/* Facebook Pixel */}
            <script dangerouslySetInnerHTML={{ __html: facebookPixelTag }} />
            <noscript dangerouslySetInnerHTML={{ __html: facebookNoScript }} />

            {/* Hotjar */}
            <script src="https://t.contentsquare.net/uxa/cda16a67266e4.js" />

            {/* Reddit Pixel */}
            <script dangerouslySetInnerHTML={{ __html: redditPixelTag }} />

            {/* Google Tag Manager */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16670578700" />
            <script dangerouslySetInnerHTML={{ __html: googleTagManagerTag }} />

            {/* Cloudflare Insights */}
            <script
                defer
                src="https://static.cloudflareinsights.com/beacon.min.js"
                data-cf-beacon='{"token": "0fb3b8a52ab14af0bf3da2e932d60c42"}'
            ></script>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
