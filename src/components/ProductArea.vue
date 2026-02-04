<template>
  <div class="product">
    <div class="wrapper">
      <div class="product-content">
        <div class="product-slider">
          <div class="product-slider__main">
            <div class="product-slider__main-item">
              <div class="products-item__type">
                <span class="products-item__sale">sale</span>
              </div>
              <img loading="lazy" src="/img/product-img6.jpg" alt="product" />
            </div>
            <div class="product-slider__main-item">
              <img loading="lazy" src="/img/product-img7.jpg" alt="product" />
            </div>
            <div class="product-slider__main-item">
              <img loading="lazy" src="/img/product-img8.jpg" alt="product" />
            </div>
            <div class="product-slider__main-item">
              <img loading="lazy" src="/img/product-img9.jpg" alt="product" />
            </div>
            <div class="product-slider__main-item">
              <img loading="lazy" src="/img/product-img7.jpg" alt="product" />
            </div>
          </div>
          <div class="product-slider__nav">
            <div class="product-slider__nav-item">
              <img loading="lazy" src="/img/product-img6.jpg" alt="product" />
            </div>
            <div class="product-slider__nav-item">
              <img loading="lazy" src="/img/product-img7.jpg" alt="product" />
            </div>
            <div class="product-slider__nav-item">
              <img loading="lazy" src="/img/product-img8.jpg" alt="product" />
            </div>
            <div class="product-slider__nav-item">
              <img loading="lazy" src="/img/product-img9.jpg" alt="product" />
            </div>
            <div class="product-slider__nav-item">
              <img loading="lazy" src="/img/product-img7.jpg" alt="product" />
            </div>
          </div>
        </div>
        <div class="product-info">
          <h3>Foundation Beshop</h3>
          <span class="product-stock">in stock</span>
          <span class="product-num">SKU: IN1203</span>
          <span class="product-price"><span>$265.95</span>$200.95</span>
          <p>
            Universal foundation masks skin imperfections and gives it a matte
            finish, remaining completely invisible on the face. The foundation
            is suitable for any skin type. Thanks to a unique combination of
            pigments, the foundation adapts perfectly to even the smallest
            features of skin tone, creating an even and natural tone.
          </p>
          <div class="contacts-info__social">
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
          <div class="product-options">
            <div class="product-info__color">
              <span>Сolor:</span>
              <ul>
                <li style="background-color: #fcedea"></li>
                <li style="background-color: #fee1db"></li>
                <li style="background-color: #ffd9d1" class="active"></li>
                <li style="background-color: #fdc5b9"></li>
                <li style="background-color: #fdb7a8"></li>
                <li style="background-color: #ffa08a"></li>
              </ul>
            </div>
            <div class="product-info__quantity">
              <span class="product-info__quantity-title">Quantity:</span>
              <div class="counter-box">
                <span class="counter-link counter-link__prev"
                  ><i class="icon-arrow"></i
                ></span>
                <input type="text" class="counter-input" disabled value="1" />
                <span class="counter-link counter-link__next"
                  ><i class="icon-arrow"></i
                ></span>
              </div>
            </div>
          </div>
          <div class="product-buttons">
            <a href="/cart" class="btn btn-icon"
              ><i class="icon-cart"></i> cart</a
            >
            <a href="/wishlist" class="btn btn-grey btn-icon"
              ><i class="icon-heart"></i> wish</a
            >
          </div>
        </div>
      </div>
      <div class="product-detail">
        <div class="tab-wrap product-detail-tabs">
          <ul class="nav-tab-list tabs">
            <li>
              <a href="#product-tab_1">Description</a>
            </li>
            <li class="active">
              <a href="#product-tab_2">Reviews</a>
            </li>
          </ul>
          <div class="box-tab-cont">
            <div class="tab-cont hide" id="product-tab_1">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                perferendis amet ullam quisquam ad pariatur quo accusantium quos
                dolores commodi officiis, cumque iusto adipisci quae delectus
                temporibus et, cupiditate aliquam.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                beatae provident ipsum omnis dolor sapiente maiores reiciendis
                exercitationem earum deleniti, reprehenderit iste ipsa saepe.
                Consectetur non et excepturi molestias esse?
              </p>
            </div>
            <div class="tab-cont product-reviews" id="product-tab_2">
              <div class="product-detail__items">
                <div class="review-item">
                  <div class="review-item__head">
                    <div class="review-item__author">
                      <img
                        data-src="/img/comment-author1.jpg"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACw="
                        class="js-img"
                        alt=""
                      />
                      <span class="review-item__name">Melissa Jones</span>
                      <span class="review-item__date">July 23, 2020</span>
                    </div>
                    <div class="review-item__rating">
                      <ul class="star-rating">
                        <li><i class="icon-star"></i></li>
                        <li><i class="icon-star"></i></li>
                        <li><i class="icon-star"></i></li>
                        <li><i class="icon-star"></i></li>
                        <li><i class="icon-star"></i></li>
                      </ul>
                    </div>
                  </div>
                  <div class="review-item__content">
                    I am grateful to the employees of BeShop for the quality
                    products that I have been using for more than a year, try to
                    work at this level in the future. Thank you)
                  </div>
                </div>
                <div class="review-item">
                  <div class="review-item__head">
                    <div class="review-item__author">
                      <img
                        data-src="/img/comment-author2.jpg"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACw="
                        class="js-img"
                        alt=""
                      />
                      <span class="review-item__name">Steve Gentley</span>
                      <span class="review-item__date">July 05, 2020</span>
                    </div>
                    <div class="review-item__rating">
                      <ul class="star-rating">
                        <li><i class="icon-star"></i></li>
                        <li><i class="icon-star"></i></li>
                        <li><i class="icon-star"></i></li>
                        <li><i class="icon-star"></i></li>
                        <li><i class="icon-star"></i></li>
                      </ul>
                    </div>
                  </div>
                  <div class="review-item__content">
                    I am grateful to the employees of BeShop for the quality
                    products that I have been using for more than a year, try to
                    work at this level in the future. Thank you). I am grateful
                    to the employees of BeShop for the quality products.
                  </div>
                </div>
                <div class="review-item">
                  <div class="review-item__head">
                    <div class="review-item__author">
                      <img
                        data-src="/img/comment-author3.jpg"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACw="
                        class="js-img"
                        alt=""
                      />
                      <span class="review-item__name">Amanda Clement</span>
                      <span class="review-item__date">June 15, 2020</span>
                    </div>
                    <div class="review-item__rating">
                      <ul class="star-rating">
                        <li><i class="icon-star"></i></li>
                        <li><i class="icon-star"></i></li>
                        <li><i class="icon-star"></i></li>
                        <li><i class="icon-star"></i></li>
                        <li><i class="icon-star"></i></li>
                      </ul>
                    </div>
                  </div>
                  <div class="review-item__content">
                    I am grateful to the employees of BeShop for the quality
                    products that I have been using for more than a year, try to
                    work at this level in the future. Thank you)
                  </div>
                </div>
                <a href="#" class="blog-item__link"
                  >show more <i class="icon-arrow-md"></i
                ></a>
              </div>
              <div class="product-detail__form post-comment__form">
                <div class="subscribe-form__img">
                  <img
                    data-src="/img/subscribe-img.png"
                    src="data:image/gif;base64,R0lGODlhAQABAAAAACw="
                    class="js-img"
                    alt=""
                  />
                </div>
                <form>
                  <h4>leave a review</h4>
                  <p>Your email address will not be published.</p>
                  <div class="rating" data-id="rating_1"></div>
                  <div class="box-field">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div class="box-field">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div class="box-field box-field__textarea">
                    <textarea
                      class="form-control"
                      placeholder="Enter your review"
                    ></textarea>
                  </div>
                  <button type="submit" class="btn">send</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img
      class="promo-video__decor js-img"
      data-src="/img/promo-video__decor.jpg"
      src="data:image/gif;base64,R0lGODlhAQABAAAAACw="
      alt=""
    />
  </div>
</template>
