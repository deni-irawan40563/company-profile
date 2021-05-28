import React from 'react'
import './Footer.css'
import Logo from '../../assets/img/logo.png'

export default function Footer() {
  return (
    <footer>
      <div className="filter-footer">
        <div className="left footer-content">
          <img src={Logo} alt="logo" />
          <p>Bintoro Architect melayani jasa desain rumah sesuai dengan keinginan Anda. Kami memiliki tim arsitek profesional dan berpengalaman</p>
        </div>
        <div className="center-left footer-content">
          <h3><i class="fas fa-ellipsis-v"></i> Recent Post</h3>
          <div className="new-post-card-footer">
            <img src="https://bintoroarchitect.co.id/media/Cover-Interior%20Rumah%20Minimalis%20Type%2036.webp" alt="new-post" />
            <div className="new-post-title">
              <h5>10 Desain Interior Rumah Minimalis Type 36 yang Cantik</h5>
              <p>28 May / 0 Komentar</p>
            </div>
          </div>
        </div>
        <div className="center-right footer-content">
          <h3><i class="fas fa-ellipsis-v"></i> Useful Link</h3>
          <ul>
            <li>About</li>
            <li>Services</li>
            <li>Project</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="right footer-content">
          <h3><i class="fas fa-ellipsis-v"></i> Recent Work</h3>
          <div className="recent-work-img">
            <img src="https://bintoroarchitect.co.id/media/Thumbnail%20Project%20108%20%E2%80%93%20Desain%20Rumah%20Ibu%20Sari%20%E2%80%93%20Jaktim-01.webp" alt="recent-work" loading="lazy" />
            <img src="https://bintoroarchitect.co.id/media/Thumbnail%20Project%20107%20%E2%80%93%20Desain%20Rumah%20Bapak%20Agus%20%E2%80%93%20Tangsel-01.webp" alt="recent-work" loading="lazy" />
            <img src="https://bintoroarchitect.co.id/media/Thumbnail%20Project%20106%20%E2%80%93%20Desain%20Rumah%20Bapak%20Fathoni%20%E2%80%93%20Jaktim-01.webp" alt="recent-work" loading="lazy" />
            <img src="https://bintoroarchitect.co.id/media/Thumbnail%20Project%20105%20%E2%80%93%20Desain%20Rumah%20Ibu%20Afiqah%20%E2%80%93%20Cibubur-01.webp" alt="recent-work" loading="lazy" />
            <img src="https://bintoroarchitect.co.id/media/Thumbnail%20Project%20104%20%E2%80%93%20Desain%20Rumah%20Ibu%20Dayinta%20%E2%80%93%20Tangsel-01.webp" alt="recent-work" loading="lazy" />
            <img src="https://bintoroarchitect.co.id/media/Thumbnail%20Project%20103%20%E2%80%93%20Desain%20Rumah%20Bapak%20Eddy%20%E2%80%93%20Bogor-01.webp" alt="recent-work" loading="lazy" />
          </div>
        </div>
      </div>
    </footer>
  )
}
