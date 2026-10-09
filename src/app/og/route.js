import { ImageResponse } from 'next/og';
import { SITE } from '@/lib/seo';

export const runtime = 'edge';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    
    const title = searchParams.get('title') || SITE.name;
    const description = searchParams.get('description') || SITE.description;
    const type = searchParams.get('type') || 'default'; // default, service, work, blog

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0a2e 50%, #16213e 100%)',
            padding: '80px',
            fontFamily: 'system-ui, sans-serif',
          }}
        >
          {/* Top section with title and description */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div
              style={{
                fontSize: 72,
                fontWeight: 'bold',
                color: 'white',
                lineHeight: 1.2,
                maxWidth: '900px',
              }}
            >
              {title}
            </div>
            <div
              style={{
                fontSize: 32,
                color: '#8b93b0',
                lineHeight: 1.4,
                maxWidth: '800px',
              }}
            >
              {description}
            </div>
          </div>

          {/* Bottom section with branding */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              {/* Logo placeholder - simple geometric shape */}
              <div
                style={{
                  width: 60,
                  height: 60,
                  background: 'linear-gradient(135deg, #7B2CBF 0%, #5b3fd6 100%)',
                  borderRadius: 12,
                }}
              />
              <div
                style={{
                  fontSize: 36,
                  fontWeight: 'bold',
                  color: 'white',
                }}
              >
                {SITE.name}
              </div>
            </div>
            
            {/* Type badge */}
            {type !== 'default' && (
              <div
                style={{
                  fontSize: 24,
                  color: '#7B2CBF',
                  background: 'rgba(123, 44, 191, 0.1)',
                  border: '2px solid rgba(123, 44, 191, 0.3)',
                  padding: '12px 24px',
                  borderRadius: 8,
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                }}
              >
                {type}
              </div>
            )}
          </div>

          {/* Decorative elements */}
          <div
            style={{
              position: 'absolute',
              top: -100,
              right: -100,
              width: 400,
              height: 400,
              background: 'rgba(123, 44, 191, 0.1)',
              borderRadius: '50%',
              filter: 'blur(80px)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: -100,
              left: -100,
              width: 400,
              height: 400,
              background: 'rgba(91, 63, 214, 0.1)',
              borderRadius: '50%',
              filter: 'blur(80px)',
            }}
          />
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e) {
    console.error('Error generating OG image:', e);
    return new Response('Failed to generate image', { status: 500 });
  }
}
