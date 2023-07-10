<template>
  <div class="mt-20">
    <section>
      <div class="container">
        <div class="row pt-[33px]">
          <div class="col-12">
            <div>
              <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item text-sm text-[#6D728E]">
                    <NuxtLink to="/">
                      صفحه اصلی
                    </NuxtLink>
                  </li>
                  <li class="breadcrumb-item text-sm text-[#6D728E] active" aria-current="page">
                    سوالات متداول
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg_gradient title-faq-page flex items-center">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="">
              <h1 class="heading_h pe-5 me-3">
                سوالات متداول
              </h1>
              <p class="heading_p">
                سوالات متداول توسط کاربران
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="faq-page pb-5 mb-3 pt-4 mt-2">
      <div class="container">
        <div id="accordionPanelsStayOpenExample" class="accordion ">
          <div class="row">
            <div class="col-lg-6 col-12">
              <div class="accordion-item">
                <h2 id="panelsStayOpen-headingOne" class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                    آیا اطلاعات مشتریان در امان هستند؟
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
                  <div class="accordion-body">
                    بله، حفاظت از اطلاعات مشتریان برای ما بسیار مهم است. ما از تکنولوژیها و روشهای امنیتی پیشرفته استفاده میکنیم تا اطلاعات شما را محافظت کنیم و از دسترسی غیرمجاز جلوگیری کنیم.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 id="panelsStayOpen-headingThree" class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseThree"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseThree"
                  >
                    آیا نرم افزار شما در تمام پلتفرمها قابل دسترسی است؟
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                  <div class="accordion-body">
                    بله، با توجه به پیاده سازی نرم افزار در بستر سرور های ابری، این نرم افزار بر روی اکثر پلتفرمهای رایج مانند ویندوز، مک، iOS و اندروید از طریق مرورگر وب قابل دسترسی است.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 id="" class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseSix"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseThree"
                  >
                    آیا نرم افزار شما امکان کنترل عملکرد بازاریابان را فراهم میکند؟
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseSix" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                  <div class="accordion-body">
                    بله، نرم افزار ما امکان کنترل عملکرد بازاریابان را فراهم میکند. شما میتوانید اطلاعات مربوط به فروش و تراکنشها را دریافت کنید و گزارشات مربوط به عملکرد بازاریابان را مشاهده کنید. همچنین، میتوانید اهداف و کارهای بازاریابی را به آنها اختصاص دهید و فعالیتهایشان را بر اساس استراتژیهای خود هدایت کنید. این امکانات به شما اجازه میدهد تا بهبودهای لازم را اعمال کنید و عملکرد بازاریابی خود را بهبود بخشید.
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-12">
              <div class="accordion-item ">
                <h2 id="panelsStayOpen-headingTwo" class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTwo"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseTwo"
                  >
                    آیا نرم افزار شما امکان سطح دسترسی متفاوت برای کاربران را فراهم میکند؟
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                  <div class="accordion-body">
                    بله، نرم افزار ما امکان سطح دسترسی متفاوت برای کاربران را داراست. شما میتوانید سطوح دسترسی مختلف را برای کاربران تعیین کنید و آنها را به گروهها، نقشها یا وظایف مختلف تخصیص دهید. این امکان به شما اجازه میدهد تا به هر کاربر دسترسیهای مخصوص به اطلاعات و قابلیتهای مشخصی اعطا کنید. با این روش، میتوانید کنترل بیشتری بر روی اطلاعات و عملکرد نرم افزار خود داشته باشید و امنیت آن را افزایش دهید.
                  </div>
                </div>
              </div>
              <div class="accordion-item ">
                <h2 id="" class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseFour"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseTwo"
                  >
                    آیا نرم افزار شما امکاناتی برای برگزاری مارکتینگ کمپین فراهم میکند؟
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                  <div class="accordion-body">
                    بله، نرم افزار ما امکاناتی برای برگزاری مارکتینگ کمپینها در اختیار شما قرار میدهد. شما میتوانید اقدامات مختلفی را مانند ارسال ایمیلها، پیامکها، پیامهای اعلانی و اجتماعی، بهبود روابط با مشتریان و تبلیغ محصولات و خدمات خود انجام دهید. همچنین، میتوانید عملکردهای کمپینهای خود را پیگیری کنید و با تحلیل دادههای مربوطه، بهبودهای لازم را ایجاد کنید.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="row pt-5 mt-3">
          <div class="col-12">
            <div class=" flex items-center justify-center">
              <NuxtLink to="/faq">
                <button class="btn-md white-btn">
                  بیشتر
                </button>
              </NuxtLink>
            </div>
          </div>
        </div> -->
      </div>
    </section>
  </div>
</template>
