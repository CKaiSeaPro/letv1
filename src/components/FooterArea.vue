<template>
  <footer class="footer">
    <div class="wrapper">
      <div class="footer-top">
        <div class="footer-top__social">
          <span>Find us here:</span>
          <ul>
            <li>
              <a href="#"><i class="icon-facebook"></i></a>
            </li>
            <li>
              <a href="#"><i class="icon-twitter"></i></a>
            </li>
            <li>
              <a href="#"><i class="icon-insta"></i></a>
            </li>
            <li>
              <a href="#"><i class="icon-in"></i></a>
            </li>
          </ul>
        </div>
        <div class="footer-top__logo">
          <img
            data-src="/img/footer-logo.png"
            src="data:image/gif;base64,R0lGODlhAQABAAAAACw="
            class="js-img"
            alt=""
          />
        </div>
        <div class="footer-top__payments">
          <span>Payment methods:</span>
          <ul>
            <li>
              <img
                data-src="/img/payment1.png"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAeCAMAAABZj73OAAABUFBMVEU4V6c3WKU3WKY4V6b9//v+/fw4V6n9/f77/v05Vqj//v04V6X9//38/fv+/vo2V6g5V6NMZ6s2V6f9/fnh5vChr848Wqc6V6c7VqDGz+DAy9+wvdiUo86GmMVlfbVVb65HYqw2VaSSe3P+/v/3/P35/Pno7fTP1+apuNSaqs+Xp86Im8WMn8SBlMBvhrpnfrk2V6tGYKP3pTX2+Pr09/rv8vTq8PTd5vDEz+S0v9ektNSfrM+esc2ersyGlciRoMaAksJdc7FQaa9JZK5Oa6w4VqtAXalBWaY7VKT+//nu9ff1+fX39ezZ4OrZ4OjM1uTN0+PL1uKzwN28ydu2vtaos9SlsNOdrdCOoMuTpMmPn8R6j8N6i79/kb1xib1zh7xxg7hphbduhbRgd7JKY6n21qVAX6P21aE4VJ7dw5pwcIdzdIVsb4OBcIK5iFzXn1OREUByAAABoElEQVQ4y+3Txa4cMRAF0HKX7XYzwzAzz2NmCDMzc/L/u8woyipeZJZR3l1YLllHsuUqQFgwCP6iRAFlUUIuyK9omuMA8PkGNUDUcHZCCMxjzEoJUQxAcAyYM37iaAYCUcZjgjOn+IbxJ+FnX6rV6jcXoZzPvzh8lD/G84Nurl04Baf8ML8ruRgq6dcf0+lncJ5RNti3g2K8I3Sb1icJz+n2Sip9Pn/1YVolpMWa8T1blJ9S9UZn887HZLLKqDqSEiVdffedeIx1kgxdxi29MVTGFW4UrHCF9QwZIZANPrldq15Kr5kZXgiCpf4RgfM1fSfDchUZSaBjXZ2ENKt5V8yIx23VpGseGTXUg7Ydclf6lSUq+kJ9jkWq9nxwh2GgbyRZdv1sYIqynMSXa8tqmJL9Gh3FJxq+XzJvlRo1W6i6VQQp4Xd13drzsauKo9eZ3Se3LWtrk1GTCtPe41Li9yirvwXcYM3KfV0VVNw8brJ1z/Nal7K+lDiHUTQggP3tgvvmwXorNzwtRVHRRXi5/biCf9HJiPPld/EPjdj/SX4CMmstiq+6ojYAAAAASUVORK5CYII="
                class="js-img"
                alt=""
              />
            </li>
            <li>
              <img
                data-src="/img/payment2.png"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAeCAMAAABZj73OAAABKVBMVEX3nhzqABs4PWokKk02PWklLFH/XwE5PmsjKUovOGMmLlMzO2cxOmUpMVgqMlstNmE1PGgrNF4nL1QoMFYuK1AuMU+vDizNCCbajyXqlx/rABv+ZAP/WwFBKU6KZ0SJGDm2eyzVBSH3mxrsCRn7TwY0OWQ7PmFHNmBOSV4/PlprKlFlKFBGP01PRUuHIESTa0KXGz6bbDO5fTKUFDLGCSftmR/gAx/eAx/kAR31nRz4khfwGhT6gg/1NQ70Lw77egz7dQr4Pwr8VARDRGFOM11WTVxUM1wzOFs0LVNoLFNuWVJrWFJwWlFXSUhfTENdIEKQHkGfcT5zVz1uHT2aGjyEYDmBGTmueDehcTePZjaoFDS8firRiyjhkiLQfSHRFSH4lxn8dQv9bAaPfnWfAAABWElEQVQ4y53R11LCQBiG4UURFYxGTTUEEpQiUqXZUey99+79X4Rksrv5YjwJ71Ey8z/z7yZkNHRkKHSDkGjoAiRfLB4fREXnUYwWTs5O9wNExPJXasRJre0lxN2qRpy064KIkQRU6URY7UpKJ6xWVYQpINm7CLS5TaDlHJAJXs0nYrEumkdvziNLKNZj/TbQpDwyTsuqSBYcYmSA6Dk2yUlgSWBNgLyAmNtxif8LcDJFa/45l5OBpMUmOWkjSbokmUGzyMg0bcVP3PyETnJiI+lRgmL1kJFJmvLP9X+QvLFJTtK4ZcslXSRPnAg0Ey8z715mDc9VZpOcCME13wSyBE5mWUcqrun/GeMLxHupxAbJDM+00fQMPJZ+7s2RuJfZhI/2+QFCK8MYkrj0YFPQSUvyvcZWPMtxJCO+pMuGoiiNW8l5kS/q1qtVv5H9M5SEiQyHbhAyFrpfV5k6KgKBUOcAAAAASUVORK5CYII="
                class="js-img"
                alt=""
              />
            </li>
            <li>
              <img
                data-src="/img/payment3.png"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAeCAMAAABZj73OAAABvFBMVEUCVKYBTqICS58BRJoBQJcCR5wBYLADUKQCSJ0BRpsBP5YCOpEBVacBTKEBQpkCU6UBO5IBX68BV6gBXa4BV6oCSp4CQZgBW60BS6ACOJABV6kBQ5kDUqUCY7IBWqwCZLMCRZsBYbEBWKsDUKMCNo8BNYwBTJ8BPpQBPJMBTKACM4sDQJQBNo0DQpkCUqQAPZX8/PwCT6MCSZ3+/v4CRJj8/vwBXq8DQpcBPpb4+/rp7/awyeMBPJH5/fzr8vXJ2eZulsMBZ7UCZrQDUqcdWaLt9Pm80OCsw9mLpshChcAeaLA+ca8DWq0qZKcmXqP0+Pny9PXb5/Ld5+7C0+ClxN5zotCdtc8WZK4naKwvYaQSVqEFUZ8GR5j+///m8frm7ffT4e3X5OzO3Oe80OazyuO4z+G0yN+dvt6xyNuvx9mivNaTtdOArs9pnMmKqcVgk8VslL1eibw9gLw/fLY4dbQtbq0QXqsybakgYakKW6lMdqgIV6cXWKEKQpbh6/Dh6O3E1OqGsd+gus+NrM9bksiAoMV4k75ni7hUhLhHe7YwdLVoi7RagLETabE2bK48Z6ckY6cLV6ENTpwJSJtAp9GTAAADkElEQVQ4y1XU9X/aYBAG8ACBJAwKNDKglCFbIGOhKVqgyAZ1d527u7u7/8O7u7ej2+98P889uXvhDh8+cmTfvv7+uMvlCgRKsrw3GlUUpdfDcT6fIAx6vV67bldF0Sk5HH09PRoPBMS+eL8rDkQGsRdF2AOEywqDNps3aNdJAEEBBASE9FOIvBdEQgn3UkhEEEAAgRCnU4o5ehwmEhJsLCJRJGHMgLEEEAaInBMIhgBxcwBAwFjYQ+5mMJJkIZQBTRw9Ju8mEt+tzggTPhA2GmuX8EQwgwgTYQghEcliEyMYVHOiiKSvz9SI7PaQu9UZQRGkEFH8+7mADHDYIxBwlUql6elpEDAWrYQ+l2FA+RzOxXYCGQMpDjLi8a8TExO31qJKoncnIxKhlei6zpog0Yik/BxNdaWYz+cbt6NEPDsZQOzUXZSofLmMYxEJyKXlo3nLspanYap7d++uZ9sYQkVyMzOzv6VYzFEuzz7l3UMDaSIuuZmfr1arL9bgtK5aRev8VmSQuuv2qWLROrFdiDm0KWuDyB4uAN0fjuRHjlePn55QuPDlxo/Rha07d9YfrD9QN7/drE+9sjobU52Zm3OQkvb7kcjyZPHosWMLp2ufYCOjizdGLl6Yb8xfPruknzv3tvL5xOK1yvPK6PjJjJsRPJJb+bkzZ2q1l489bd9Co3mpZd1/Umm15q5VZ5cbzbFHlRuZ5vjYmJZCAQQWeD1frZ2/evuxh2v/rKxsCdfrH1rFj516vbW9tOqMzdbHH428b75LpVCEOFz5leJibUWh851cuh9Jbo6dunT2yebJ1e1fF79IjsL4qdXRjQvfiYRCHIjEvcmV2hsSvnY7YrMNCjlv0Pv6WUfKOaVCX8HkNT7D88MUsp+Ds0oketcmH9Kjigi4dZthV4PqTEcSpQLeVllzu3m3f3gPCCCKQpf490ySuBBDZ2vHmwdhmnSO6S7BQ+SI0JtiT4QdI90JPUVYYiqNYv+hQ0Aggp17lh2WgURkx4hj0TUODQ1jESAHOBIIfNlsEgD7e+hm0MnjAdNYIIBQAAgsToBliJTRFWyJmHHgAPt999oNg4p3e6CgY6SNEDmIggD7y4I3RaKbYfJEMAOGQnEQE6B3EmtAgm7/RxQKGjZ3D0AITkUZQLLQGgC+c/w9+1axGJFyOZPJpLDHfyTJgC1oV3VVVXM7PTTNNOH3SNJp/3BoTwgIiYN/ABf6rjKK4yd8AAAAAElFTkSuQmCC"
                class="js-img"
                alt=""
              />
            </li>
            <li>
              <img
                data-src="/img/payment4.png"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAeCAMAAABZj73OAAABMlBMVEUdHSD/////SAD19fU5OTtiYmRSUlVAQEIyMjUsLC89Ixv7+/vu7u7s7O3S0tPPz8+enp9QUFPvRQLj4+Pf3+Dd3d3Z2dnV1dXCwsOioqOJiYtOTlBDQ0YvLzIpKSwkJCchISQhHh/0RgHGxsfExMSxsbKampuOjpCHh4iEhIaCgoR/f4F4eHp1dXdsbG5dXV9MTE9KSkxGRkg9PT81NTcmJikmHh8pHx5eKRe0OgrSPwbrRAPw8PHn5+i/v8CsrK2pqauXl5haWlxYWFsxIR05IhxSJxlPJhlJJRl8LxKKMhGZNA6lNg2pNwzXQAX5RwHKysq2trekpKWQkJGMjI18fH5ubnBra2xXV1ovIR5FJRtEJRpZKBdmKxZ1LhRuLBSdNQ6VNA6hNg3MPgfkQwTfQgS8FSbmAAABdUlEQVQ4y+3OtW4DURQE0HlvmcHMzExJbIeZmRn//xeyWsVdFDtSihQ+zb3NaAZTf2hGnsUEUhjZ7lN6tJ8an3iTvxr2KKXDwcEEPYN992wcUtq/x0Se0zcA5oZ0sIWfJMzc8jVcj3TbSaTp7phFPAmHiOW+d3QTD2l7DmOUNcBbRD1cjKbSsmwPb4VykUWr0QyvAlap1gNbKbFiLXoRZ+HKLSKicHrgnKniaf3d3qjPhzKalFeDQSZW1sKelYjn7DizpvqXhDZchuZXV0LeWIe0gL69BZ8JlqwGdXBKR601fWbGFE6MS1LHF4kpcGKSKeFKSWKH7oAlFqKEn6+g4msQn14QiTeQF04NjESI4ORINR4IYN3eA2KEg+ltEx5Li2tMF4mEwiGJbAgjHAOHrvpzWbwezgBY1vSFSEMRYRR6/oWsgTwT9HQ9VYyIHTjivBRj5aNNwGG14hAFICohwTclwOK7yXYP33g5wG99yPitXUz9C5/uRSqxB2mfUQAAAABJRU5ErkJggg=="
                class="js-img"
                alt=""
              />
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-nav">
        <div class="footer-nav__col">
          <span class="footer-nav__col-title">About</span>
          <ul>
            <li><a href="/about">About us</a></li>
            <li><a href="/categories">Categories</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/contacts">Contacts</a></li>
          </ul>
        </div>
        <div class="footer-nav__col">
          <span class="footer-nav__col-title">Services</span>
          <ul>
            <li><a href="/makeup">Make up</a></li>
            <li><a href="/spa">SPA</a></li>
            <li><a href="/perfume">Perfume</a></li>
            <li><a href="/nails">Nails</a></li>
            <li><a href="/skincare">Skin care</a></li>
            <li><a href="/haircare">Hair care</a></li>
          </ul>
        </div>
        <div class="footer-nav__col">
          <span class="footer-nav__col-title">Links</span>
          <ul>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/privacy">Privacy policy</a></li>
            <li><a href="/terms">Terms of use</a></li>
            <li><a href="/support">Support</a></li>
            <li><a href="/shipping">Shipping details</a></li>
            <li><a href="/information">Information</a></li>
          </ul>
        </div>
        <div class="footer-nav__col">
          <span class="footer-nav__col-title">Contact</span>
          <ul>
            <li>
              <i class="icon-map-pin"></i> 7 Voortrekker St, Benoni, 1500, RSA
            </li>
            <li>
              <i class="icon-smartphone"></i>
              <div class="footer-nav__col-phones">
                <a href="tel:+27679832038">+27 67 983 2038</a>
                <a href="tel:+27693103027">+27 69 310 3027</a>
              </div>
            </li>
            <li>
              <i class="icon-mail"></i
              ><a href="mailto:info@gugulethulunga.co.za"
                >info@gugulethulunga.co.za</a
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-copy">
        <span>&copy; All rights reserved. Gugulethu Priscillah Lunga 2026</span>
      </div>
    </div>
  </footer>
</template>
