//Instagram API
import { useEffect, useState } from 'react';
import fetch from 'isomorphic-fetch';
import styled from 'styled-components';

const InstaImage = styled.img`
    width: 100%;
    height: auto;
    margin: 0%
`;  

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PostGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15%, 1fr)); /* 5 items in a row */
  gap: 2%; 
`;

function InstagramPage() {
  const [instagramData, setInstagramData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch Instagram data when the component mounts
    const fetchData = async () => {
      try {
        //fetches instagram posts using access token
        const response = await fetch('https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink&access_token=IGQWRNeE42TmRlWE52WlNGTlYyNGZAhWkhTSFN4YkZA1OXVVYWg0WXJ4a0l2Um16ZADVWUGV6OU9fYnkzN1JJRGtIajNTVUp4cHRSN2xDX28tZAkdEMVpvYmU3M0VETXV4dFE3M2pPQkpGNDlpajFWMWNFeEZAkWERMQ1UZD');
        if (!response.ok) {
          throw new Error('Failed to fetch Instagram data');
        }
        const data = await response.json();
        setInstagramData(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();

    return () => {
      setInstagramData(null);
      setError(null);
    };
  }, []);

  if (error) {
    return <div className="bg-red-100 text-red-900 p-4">Error: {error}</div>;
  }

  if (!instagramData) {
    return <div className="bg-blue-100 text-blue-900 p-4">Loading...</div>;
  }


  return (
    <div>
      <PostContainer>
        <PostGrid>
          {instagramData.data.map(post => (
            <a key={post.id} href={post.permalink} target="_blank" rel="noopener noreferrer"> {/* Open link in a new tab */}
              <div>
                <InstaImage src={post.media_url} />
                <p>{post.caption}</p>
              </div>
            </a>
          ))}
        </PostGrid>
      </PostContainer>
    </div>
  );
}

export default InstagramPage;


