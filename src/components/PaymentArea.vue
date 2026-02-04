<template>
  <div class="checkout checkout-step2">
    <div class="wrapper">
      <div class="checkout-content">
        <div class="checkout-payment checkout-form">
          <h4>Payment Methods</h4>
          <div class="checkout-payment__item active">
            <div class="checkout-payment__item-head">
              <label class="radio-box"
                >Credit card
                <input type="radio" checked="checked" name="radio" />
                <span class="checkmark"></span>
                <span class="radio-box__info">
                  <i class="icon-info"></i>
                  <span class="radio-box__info-content">
                    Aliqua nulla id aliqua minim ullamco adipisicing enim. Do
                    sint nisi velit qui. Ullamco Lorem aliquip dolor nostrud
                    cupidatat amet.
                  </span>
                </span>
              </label>
            </div>
            <div class="checkout-payment__item-content">
              <div class="box-field">
                <span>Card number</span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="xxxx xxxx xxxx xxxx"
                  maxlength="16"
                />
              </div>
              <div class="box-field__row">
                <div class="box-field">
                  <span>Expiration date</span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="mm"
                    maxlength="2"
                  />
                </div>
                <div class="box-field">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="yy"
                    maxlength="2"
                  />
                </div>
                <div class="box-field">
                  <span>Security code</span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="CVV"
                    maxlength="3"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="checkout-payment__item">
            <div class="checkout-payment__item-head">
              <label class="radio-box"
                >PayPal
                <input type="radio" name="radio" />
                <span class="checkmark"></span>
                <span class="radio-box__info">
                  <i class="icon-info"></i>
                  <span class="radio-box__info-content">
                    Aliqua nulla id aliqua minim ullamco adipisicing enim. Do
                    sint nisi velit qui. Ullamco Lorem aliquip dolor nostrud
                    cupidatat amet.
                  </span>
                </span>
              </label>
            </div>
            <div class="checkout-payment__item-content">
              <div class="box-field">
                <span>Card number</span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="xxxx xxxx xxxx xxxx"
                  maxlength="16"
                />
              </div>
              <div class="box-field__row">
                <div class="box-field">
                  <span>Expiration date</span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="mm"
                    maxlength="2"
                  />
                </div>
                <div class="box-field">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="yy"
                    maxlength="2"
                  />
                </div>
                <div class="box-field">
                  <span>Security code</span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="CVV"
                    maxlength="3"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="checkout-payment__item">
            <div class="checkout-payment__item-head">
              <label class="radio-box"
                >EFT / Cash payment
                <input type="radio" name="radio" />
                <span class="checkmark"></span>
                <span class="radio-box__info">
                  <i class="icon-info"></i>
                  <span class="radio-box__info-content">
                    Aliqua nulla id aliqua minim ullamco adipisicing enim. Do
                    sint nisi velit qui. Ullamco Lorem aliquip dolor nostrud
                    cupidatat amet.
                  </span>
                </span>
              </label>
            </div>
            <div class="checkout-payment__item-content">
              <div class="box-field">
                <span>Card number</span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="xxxx xxxx xxxx xxxx"
                  maxlength="16"
                />
              </div>
              <div class="box-field__row">
                <div class="box-field">
                  <span>Expiration date</span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="mm"
                    maxlength="2"
                  />
                </div>
                <div class="box-field">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="yy"
                    maxlength="2"
                  />
                </div>
                <div class="box-field">
                  <span>Security code</span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="CVV"
                    maxlength="3"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="checkout-buttons">
            <a href="/checkout" class="btn btn-grey btn-icon">
              <i class="icon-arrow"></i> back</a
            >
            <a href="/order" class="btn btn-icon btn-next"
              >next <i class="icon-arrow"></i
            ></a>
          </div>
        </div>
        <div class="checkout-info">
          <div class="checkout-order">
            <h5>Your Order</h5>
            <div class="checkout-order__item">
              <a href="/product" class="checkout-order__item-img">
                <img
                  data-src="/img/product-img6.jpg"
                  src="data:image/gif;base64,R0lGODlhAQABAAAAACw="
                  class="js-img"
                  alt=""
                />
              </a>
              <div class="checkout-order__item-info">
                <a class="title6" href="/cart"
                  >Foundation Beshop <span>x2</span></a
                >
                <span class="checkout-order__item-price">$401.90</span>
                <span class="checkout-order__item-num">SKU: IN1203</span>
              </div>
            </div>
            <div class="checkout-order__item">
              <a href="/product" class="checkout-order__item-img">
                <img
                  data-src="/img/product-img7.jpg"
                  src="data:image/gif;base64,R0lGODlhAQABAAAAACw="
                  class="js-img"
                  alt=""
                />
              </a>
              <div class="checkout-order__item-info">
                <a class="title6" href="/cart"
                  >Hair mask with oat extract <span>x1</span></a
                >
                <span class="checkout-order__item-price">$125.95</span>
                <span class="checkout-order__item-num">SKU: IN1203</span>
              </div>
            </div>
            <div class="checkout-order__item">
              <a href="/product" class="checkout-order__item-img">
                <img
                  data-src="/img/product-img8.jpg"
                  src="data:image/gif;base64,R0lGODlhAQABAAAAACw="
                  class="js-img"
                  alt=""
                />
              </a>
              <div class="checkout-order__item-info">
                <a class="title6" href="/cart"
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
