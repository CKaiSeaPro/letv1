<template>
  <div class="checkout">
    <div class="wrapper">
      <div class="checkout-content">
        <div class="checkout-form">
          <form>
            <div class="checkout-form__item">
              <h4>Info about you</h4>
              <div class="box-field">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter your name"
                />
              </div>
              <div class="box-field">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter your last name"
                />
              </div>
              <div class="box-field__row">
                <div class="box-field">
                  <input
                    type="tel"
                    class="form-control"
                    placeholder="Enter your phone"
                  />
                </div>
                <div class="box-field">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Enter your mail"
                  />
                </div>
              </div>
            </div>
            <div class="checkout-form__item">
              <h4>Delivery Info</h4>
              <select class="styled" data-placeholder="Select RSA Province">
                <option value="" label="0"></option>
                <option>Gauteng</option>
                <option>Western Cape</option>
              </select>
              <div class="box-field__row">
                <div class="box-field">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter the city"
                  />
                </div>
                <div class="box-field">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter the address"
                  />
                </div>
              </div>
              <div class="box-field__row">
                <div class="box-field">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Delivery day"
                  />
                </div>
                <div class="box-field">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Delivery time"
                  />
                </div>
              </div>
            </div>
            <div class="checkout-form__item">
              <h4>Note</h4>
              <div class="box-field box-field__textarea">
                <textarea
                  class="form-control"
                  placeholder="Order note"
                ></textarea>
              </div>
              <label class="checkbox-box checkbox-box__sm">
                <input type="checkbox" />
                <span class="checkmark"></span>
                Create an account
              </label>
            </div>
            <div class="checkout-buttons">
              <a href="#" class="btn btn-grey btn-icon">
                <i class="icon-arrow"></i> back</a
              >
              <a href="/payment" class="btn btn-icon btn-next"
                >next <i class="icon-arrow"></i
              ></a>
            </div>
          </form>
        </div>
        <div class="checkout-info">
          <div class="checkout-order">
            <h5>Your Order</h5>
            <div class="checkout-order__item">
              <a href="#" class="checkout-order__item-img">
                <img
                  data-src="/img/product-img6.jpg"
                  src="data:image/gif;base64,R0lGODlhAQABAAAAACw="
                  class="js-img"
                  alt=""
                />
              </a>
              <div class="checkout-order__item-info">
                <a class="title6" href="#">Foundation Beshop <span>x2</span></a>
                <span class="checkout-order__item-price">$401.90</span>
                <span class="checkout-order__item-num">SKU: IN1203</span>
              </div>
            </div>
            <div class="checkout-order__item">
              <a href="#" class="checkout-order__item-img">
                <img
                  data-src="/img/product-img7.jpg"
                  src="data:image/gif;base64,R0lGODlhAQABAAAAACw="
                  class="js-img"
                  alt=""
                />
              </a>
              <div class="checkout-order__item-info">
                <a class="title6" href="#"
                  >Hair mask with oat extract <span>x1</span></a
                >
                <span class="checkout-order__item-price">$125.95</span>
                <span class="checkout-order__item-num">SKU: IN1203</span>
              </div>
            </div>
            <div class="checkout-order__item">
              <a href="#" class="checkout-order__item-img">
                <img
                  data-src="/img/product-img8.jpg"
                  src="data:image/gif;base64,R0lGODlhAQABAAAAACw="
                  class="js-img"
                  alt=""
                />
              </a>
              <div class="checkout-order__item-info">
                <a class="title6" href="#"
                  >Spray balm with oat extract <span>x1</span></a
                >
                <span class="checkout-order__item-price">$60.95</span>
                <span class="checkout-order__item-num">SKU: IN1203</span>
              </div>
            </div>
          </div>
          <div class="cart-bottom__total">
            <div class="cart-bottom__total-goods">
              Goods on
              <span>$588.80</span>
            </div>
            <div class="cart-bottom__total-promo">
              Discount on promo code
              <span>No</span>
            </div>
            <div class="cart-bottom__total-delivery">
              Delivery
              <span class="cart-bottom__total-delivery-date"
                >(Aug 28,2020 at 11:30)</span
              >
              <span>$30</span>
            </div>
            <div class="cart-bottom__total-num">
              total:
              <span>$618.80</span>
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
