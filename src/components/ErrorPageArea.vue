<template>
  <div class="error-page">
    <div class="wrapper">
      <div class="error-page__content">
        <div class="error-page__info">
          <div class="error-page__title">
            <span>404</span>
            Page not found
          </div>
          <div class="error-page__subtitle">
            Please try Search or go back to
            <a href="/">Homepage.</a>
          </div>
          <div class="box-field__row box-field__row-search">
            <div class="box-field">
              <input type="search" class="form-control" placeholder="Search" />
            </div>
            <button type="submit" class="btn btn-icon">
              <i class="icon-search"></i>
            </button>
          </div>
        </div>
        <div class="error-page__img">
          <img
            data-src="/img/error-img.jpg"
            class="js-img"
            src="data:image/gif;base64,R0lGODlhAQABAAAAACw="
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>
