import React from 'react';

export default function Header(props) {
  return (
    <div class="related">
      <h2>Related Posts</h2>
      <ul class="related-posts">
        <li>
          <h3>
            <a href="{{ post.url }}"></a>
          </h3>
        </li>
      </ul>
    </div>
  );
}
