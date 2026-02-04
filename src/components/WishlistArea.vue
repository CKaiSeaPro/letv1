<template>
  <div class="wishlist">
    <div class="wrapper">
      <div class="cart-table">
        <div class="cart-table__box">
          <div class="cart-table__row cart-table__row-head">
            <div class="cart-table__col">Product</div>
            <div class="cart-table__col">Price</div>
            <div class="cart-table__col">status</div>
            <div class="cart-table__col">Add to cart</div>
          </div>
          <div class="cart-table__row">
            <div class="cart-table__col">
              <a href="/product" class="cart-table__img">
                <img
                  data-src="/img/product-img6.jpg"
                  src="data:image/gif;base64,R0lGODlhAQABAAAAACw="
                  class="js-img"
                  alt=""
                />
              </a>
              <div class="cart-table__info">
                <a href="/product" class="title5">Foundation Beshop</a>
                <span class="cart-table__info-num">SKU: IN1203</span>
              </div>
            </div>
            <div class="cart-table__col">
              <span class="cart-table__price">$200.95</span>
            </div>
            <div class="cart-table__col">
              <span class="wishlist-stock">in stock</span>
            </div>
            <div class="cart-table__col">
              <span class="cart-table__total"
                ><a href="/cart" class="blog-item__link"
                  >buy now <i class="icon-arrow-md"></i></a
              ></span>
            </div>
          </div>
          <div class="cart-table__row">
            <div class="cart-table__col">
              <a href="/cart" class="cart-table__img">
                <img
                  data-src="/img/product-img7.jpg"
                  src="data:image/gif;base64,R0lGODlhAQABAAAAACw="
                  class="js-img"
                  alt=""
                />
              </a>
              <div class="cart-table__info">
                <a href="/product" class="title5">Hair mask with oat extract</a>
                <span class="cart-table__info-num">SKU: IN1203</span>
              </div>
            </div>
            <div class="cart-table__col">
              <span class="cart-table__price">$200.95</span>
            </div>
            <div class="cart-table__col">
              <span class="wishlist-available">not available</span>
            </div>
            <div class="cart-table__col">
              <span class="cart-table__total"
                ><a href="/cart" class="blog-item__link"
                  >buy now <i class="icon-arrow-md"></i></a
              ></span>
            </div>
          </div>
        </div>
      </div>
      <div class="wishlist-buttons">
        <a href="#" class="btn btn-grey">Clear Wishlist</a>
        <a href="/shop" class="btn">go shopping</a>
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
