<template>
  <div class="profile">
    <div class="wrapper">
      <div class="profile-content">
        <div class="profile-aside">
          <div class="profile-aside__subscribe">
            <h3>Stay in touch</h3>
            <div class="box-field">
              <input
                type="email"
                class="form-control"
                placeholder="Enter your email"
              />
            </div>
            <button type="submit" class="btn">subscribe</button>
            <img
              data-src="/img/subscribe-img-decor-sm.png"
              src="data:image/gif;base64,R0lGODlhAQABAAAAACw="
              class="js-img"
              alt=""
            />
          </div>
          <div class="profile-aside__viewed">
            <h5>You have viewed</h5>
            <div class="profile-aside__viewed-item">
              <a href="#" class="profile-aside__viewed-item-img">
                <img
                  data-src="/img/product-img3.jpg"
                  src="data:image/gif;base64,R0lGODlhAQABAAAAACw="
                  class="js-img"
                  alt=""
                />
              </a>
              <div class="profile-aside__viewed-item-info">
                <a href="#" class="profile-aside__viewed-item-title"
                  >Foundation Beshop</a
                >
                <span class="profile-aside__viewed-item-price">$200.95</span>
              </div>
            </div>
            <div class="profile-aside__viewed-item">
              <a href="#" class="profile-aside__viewed-item-img">
                <img
                  data-src="/img/product-img4.jpg"
                  src="data:image/gif;base64,R0lGODlhAQABAAAAACw="
                  class="js-img"
                  alt=""
                />
              </a>
              <div class="profile-aside__viewed-item-info">
                <a href="#" class="profile-aside__viewed-item-title"
                  >Hair mask with oat extract</a
                >
                <span class="profile-aside__viewed-item-price">$179.95</span>
              </div>
            </div>
            <div class="profile-aside__viewed-item">
              <a href="#" class="profile-aside__viewed-item-img">
                <img
                  data-src="/img/product-img1.jpg"
                  src="data:image/gif;base64,R0lGODlhAQABAAAAACw="
                  class="js-img"
                  alt=""
                />
              </a>
              <div class="profile-aside__viewed-item-info">
                <a href="#" class="profile-aside__viewed-item-title"
                  >Spray balm with oat extract</a
                >
                <span class="profile-aside__viewed-item-price">$212.95</span>
              </div>
            </div>
          </div>
          <div
            class="profile-aside__discount js-img"
            data-src="/img/discount-bg-sm.jpg"
          >
            <div class="profile-aside__discount-title">
              Get Your
              <span>50%</span> Off
            </div>
            <a href="#" class="btn">get now!</a>
          </div>
        </div>
        <div class="profile-main">
          <div class="tab-wrap">
            <ul class="nav-tab-list tabs">
              <li>
                <a href="#profile-tab_1">My info</a>
              </li>
              <li class="active">
                <a href="#profile-tab_2">My orders</a>
              </li>
              <li>
                <a href="#profile-tab_3">Wishlist</a>
              </li>
            </ul>
            <div class="box-tab-cont">
              <div class="tab-cont hide" id="profile-tab_1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                quasi, sit vel exercitationem ea veniam quo asperiores corporis
                dignissimos quod id. Adipisci libero similique a commodi fugiat
                quibusdam maiores ipsa!
              </div>
              <div class="tab-cont" id="profile-tab_2">
                <div class="profile-orders">
                  <div class="profile-orders__row profile-orders__row-head">
                    <div class="profile-orders__col">date</div>
                    <div class="profile-orders__col">Delivery address</div>
                    <div class="profile-orders__col">amount</div>
                    <div class="profile-orders__col">Status</div>
                  </div>
                  <div class="profile-orders__item">
                    <div class="profile-orders__row">
                      <div class="profile-orders__col">
                        <span class="profile-orders__col-mob">date</span
                        ><span class="profile-orders__item-date"
                          >Aug 17,<br />
                          2020</span
                        >
                      </div>
                      <div class="profile-orders__col">
                        <span class="profile-orders__col-mob"
                          >Delivery address</span
                        ><span class="profile-orders__item-addr"
                          >27 Division St, ew York, NY 10002, US<br />
                          St, New York, NY 10002, USA</span
                        >
                      </div>
                      <div class="profile-orders__col">
                        <span class="profile-orders__col-mob">amount</span
                        ><span class="profile-orders__item-price">$618.80</span>
                      </div>
                      <div class="profile-orders__col">
                        <span class="profile-orders__col-mob">Status</span>
                        <span class="profile-orders__col-onway"
                          >on it’s way</span
                        >
                        <span class="profile-orders__col-btn"></span>
                      </div>
                    </div>
                    <div class="profile-orders__content">
                      <ul>
                        <li>Foundation Beshop<span>$401.90</span></li>
                        <li>Hair mask with oat extract<span>$125.95</span></li>
                        <li>Spray balm with oat extract<span>$60.95</span></li>
                        <li>
                          Payment Methods:<span
                            >Сredit card: **** **** **** 1633</span
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="profile-orders__item">
                    <div class="profile-orders__row">
                      <div class="profile-orders__col">
                        <span class="profile-orders__col-mob">date</span
                        ><span class="profile-orders__item-date"
                          >Jul 10,<br />
                          2020</span
                        >
                      </div>
                      <div class="profile-orders__col">
                        <span class="profile-orders__col-mob"
                          >Delivery address</span
                        ><span class="profile-orders__item-addr"
                          >27 Division St, ew York, NY 10002, US<br />
                          St, New York, NY 10002, USA</span
                        >
                      </div>
                      <div class="profile-orders__col">
                        <span class="profile-orders__col-mob">amount</span
                        ><span class="profile-orders__item-price">$125.95</span>
                      </div>
                      <div class="profile-orders__col">
                        <span class="profile-orders__col-mob">Status</span>
                        <span class="profile-orders__col-delivered"
                          >delivered</span
                        >
                        <span class="profile-orders__col-btn"></span>
                      </div>
                    </div>
                    <div class="profile-orders__content">
                      <ul>
                        <li>Foundation Beshop<span>$401.90</span></li>
                        <li>Hair mask with oat extract<span>$125.95</span></li>
                        <li>Spray balm with oat extract<span>$60.95</span></li>
                        <li>
                          Payment Methods:<span
                            >Сredit card: **** **** **** 1633</span
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="profile-orders__item">
                    <div class="profile-orders__row">
                      <div class="profile-orders__col">
                        <span class="profile-orders__col-mob">date</span
                        ><span class="profile-orders__item-date"
                          >Jul 11,<br />
                          2020</span
                        >
                      </div>
                      <div class="profile-orders__col">
                        <span class="profile-orders__col-mob"
                          >Delivery address</span
                        ><span class="profile-orders__item-addr"
                          >27 Division St, ew York, NY 10002, US<br />
                          St, New York, NY 10002, USA</span
                        >
                      </div>
                      <div class="profile-orders__col">
                        <span class="profile-orders__col-mob">amount</span
                        ><span class="profile-orders__item-price">$170.95</span>
                      </div>
                      <div class="profile-orders__col">
                        <span class="profile-orders__col-mob">Status</span>
                        <span class="profile-orders__col-delivered"
                          >delivered</span
                        >
                        <span class="profile-orders__col-btn"></span>
                      </div>
                    </div>
                    <div class="profile-orders__content">
                      <ul>
                        <li>Foundation Beshop<span>$401.90</span></li>
                        <li>Hair mask with oat extract<span>$125.95</span></li>
                        <li>Spray balm with oat extract<span>$60.95</span></li>
                        <li>
                          Payment Methods:<span
                            >Сredit card: **** **** **** 1633</span
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="profile-orders__item">
                    <div class="profile-orders__row">
                      <div class="profile-orders__col">
                        <span class="profile-orders__col-mob">date</span
                        ><span class="profile-orders__item-date"
                          >May 25,<br />
                          2020</span
                        >
                      </div>
                      <div class="profile-orders__col">
                        <span class="profile-orders__col-mob"
                          >Delivery address</span
                        ><span class="profile-orders__item-addr"
                          >27 Division St, ew York, NY 10002, US<br />
                          St, New York, NY 10002, USA</span
                        >
                      </div>
                      <div class="profile-orders__col">
                        <span class="profile-orders__col-mob">amount</span
                        ><span class="profile-orders__item-price">$220.00</span>
                      </div>
                      <div class="profile-orders__col">
                        <span class="profile-orders__col-mob">Status</span>
                        <span class="profile-orders__col-delivered"
                          >delivered</span
                        >
                        <span class="profile-orders__col-btn"></span>
                      </div>
                    </div>
                    <div class="profile-orders__content">
                      <ul>
                        <li>Foundation Beshop<span>$401.90</span></li>
                        <li>Hair mask with oat extract<span>$125.95</span></li>
                        <li>Spray balm with oat extract<span>$60.95</span></li>
                        <li>
                          Payment Methods:<span
                            >Сredit card: **** **** **** 1633</span
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="profile-orders__item">
                    <div class="profile-orders__row">
                      <div class="profile-orders__col">
                        <span class="profile-orders__col-mob">date</span
                        ><span class="profile-orders__item-date"
                          >May 03,<br />
                          2020</span
                        >
                      </div>
                      <div class="profile-orders__col">
                        <span class="profile-orders__col-mob"
                          >Delivery address</span
                        ><span class="profile-orders__item-addr"
                          >27 Division St, ew York, NY 10002, US<br />
                          St, New York, NY 10002, USA</span
                        >
                      </div>
                      <div class="profile-orders__col">
                        <span class="profile-orders__col-mob">amount</span
                        ><span class="profile-orders__item-price">$165.00</span>
                      </div>
                      <div class="profile-orders__col">
                        <span class="profile-orders__col-mob">Status</span>
                        <span class="profile-orders__col-delivered"
                          >delivered</span
                        >
                        <span class="profile-orders__col-btn"></span>
                      </div>
                    </div>
                    <div class="profile-orders__content">
                      <ul>
                        <li>Foundation Beshop<span>$401.90</span></li>
                        <li>Hair mask with oat extract<span>$125.95</span></li>
                        <li>Spray balm with oat extract<span>$60.95</span></li>
                        <li>
                          Payment Methods:<span
                            >Сredit card: **** **** **** 1633</span
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-cont hide" id="profile-tab_3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                tempore saepe blanditiis omnis. Reprehenderit officia atque
                facere tempora, neque quaerat et aliquid tempore mollitia, nemo,
                minima iste placeat cupiditate odio?
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
