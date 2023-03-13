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
                    بلاگ
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="pb-4 mb-1">
              <h1 class="heading_h">
                وبلاگ لینک جینیس
              </h1>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                />
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2" />
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3" />
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                  <img src="/images/picdemo.png" class="d-block w-100 rounded-[40px]" alt="...">
                  <div class="carousel-caption d-none d-md-flex">
                    <h5>
                      هوش مصنوعی <strong>OpenAI</strong> احتمالاً جایگزین برخی مهندسان نرم‌افزار این شرکت می‌شود
                    </h5>
                    <div class="flex items-center">
                      <img src="/images/avatar-blog1.png" alt="avatar-image">
                      <p class="text-sm text-[#6D728E] ms-4 ps-1">
                        حامد گورابی -
                        <span>
                          ۲ ساعت پیش
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <img src="/images/picdemo.png" class="d-block w-100 rounded-[40px]" alt="...">
                  <div class="carousel-caption d-none d-md-flex">
                    <h5>
                      هوش مصنوعی <strong>OpenAI</strong> احتمالاً جایگزین برخی مهندسان نرم‌افزار این شرکت می‌شود
                    </h5>
                    <div class="flex items-center">
                      <img src="/images/avatar-blog1.png" alt="avatar-image">
                      <p class="text-sm text-[#6D728E] ms-4 ps-1">
                        حامد گورابی -
                        <span>
                          ۲ ساعت پیش
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src="/images/picdemo.png" class="d-block w-100 rounded-[40px]" alt="...">
                  <div class="carousel-caption d-none d-md-flex">
                    <h5>
                      هوش مصنوعی <strong>OpenAI</strong> احتمالاً جایگزین برخی مهندسان نرم‌افزار این شرکت می‌شود
                    </h5>
                    <div class="flex items-center">
                      <img src="/images/avatar-blog1.png" alt="avatar-image">
                      <p class="text-sm text-[#6D728E] ms-4 ps-1">
                        حامد گورابی -
                        <span>
                          ۲ ساعت پیش
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <!-- <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span> -->
                <span>
                  <SvgArrowLeft />
                </span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span>
                  <SvgArrowLeft class="rotate-180" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="py-5 mt-5">
      <div class="container pt-2">
        <div class="row">
          <div class="col-12">
            <div class="title-heading text-center">
              <h2 class="">
                انــتخاب سـردبیر
              </h2>
              <h3 class="text-[#6D728E]">
                پربازدیدترین ها و مهمترین های وبلاگ
              </h3>
            </div>
          </div>
        </div>
        <div class="row justify-center py-5 card-box">
          <div class="card col p-0">
            <NuxtLink to="/blog/category">
              <img src="/images/pic1.png" class="card-img-top" alt="card-image">
              <div class="card-body relative">
                <div class="avatar-blog">
                  <img src="/images/Avatar.png" alt="avarat">
                </div>
                <h5 class="card-title text-[18px] text-[#2C2D2E] font-bold text-center pb-1">
                  عجیب ترین تکنولوژی های آینده
                </h5>
                <p class="card-text text-[17px] text-[#999EBF] text-center lh-lg pt-2">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                </p>
              </div>
            </NuxtLink>
          </div>
          <div class="card col p-0">
            <NuxtLink to="/blog/category">
              <img src="/images/pic2.png" class="card-img-top" alt="card-image">
              <div class="card-body relative">
                <div class="avatar-blog">
                  <img src="/images/Avatar.png" alt="avarat">
                </div>
                <h5 class="card-title text-[18px] text-[#2C2D2E] font-bold text-center ">
                  عجیب ترین تکنولوژی های آینده
                </h5>
                <p class="card-text text-[17px] text-[#999EBF] text-center lh-lg pt-2">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                </p>
              </div>
            </NuxtLink>
          </div>
          <div class="card col p-0">
            <NuxtLink to="/blog/category">
              <img src="/images/pic3.png" class="card-img-top" alt="card-image">
              <div class="card-body relative">
                <div class="avatar-blog">
                  <img src="/images/Avatar.png" alt="avarat">
                </div>
                <h5 class="card-title text-[18px] text-[#2C2D2E] font-bold text-center">
                  عجیب ترین تکنولوژی های آینده
                </h5>
                <p class="card-text text-[17px] text-[#999EBF] text-center lh-lg pt-2">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                </p>
              </div>
            </NuxtLink>
          </div>
          <div class="card col p-0">
            <NuxtLink to="/blog/category">
              <img src="/images/pic4.png" class="card-img-top" alt="card-image">
              <div class="card-body relative">
                <div class="avatar-blog">
                  <img src="/images/Avatar.png" alt="avarat">
                </div>
                <h5 class="card-title text-[18px] text-[#2C2D2E] font-bold text-center">
                  عجیب ترین تکنولوژی های آینده
                </h5>
                <p class="card-text text-[17px] text-[#999EBF] text-center lh-lg pt-2">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                </p>
              </div>
            </NuxtLink>
          </div>
          <div class="card col p-0">
            <NuxtLink to="/blog/category">
              <img src="/images/pic5.png" class="card-img-top" alt="card-image">
              <div class="card-body relative">
                <div class="avatar-blog">
                  <img src="/images/Avatar.png" alt="avarat">
                </div>
                <h5 class="card-title text-[18px] text-[#2C2D2E] font-bold text-center">
                  عجیب ترین تکنولوژی های آینده
                </h5>
                <p class="card-text text-[17px] text-[#999EBF] text-center lh-lg pt-2">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                </p>
              </div>
            </NuxtLink>
          </div>
          <div class="card col p-0">
            <NuxtLink to="/blog/category">
              <img src="/images/pic6.png" class="card-img-top" alt="card-image">
              <div class="card-body relative">
                <div class="avatar-blog">
                  <img src="/images/Avatar.png" alt="avarat">
                </div>
                <h5 class="card-title text-[18px] text-[#2C2D2E] font-bold text-center">
                  عجیب ترین تکنولوژی های آینده
                </h5>
                <p class="card-text text-[17px] text-[#999EBF] text-center lh-lg pt-2">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                </p>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section class="sec-blue bg-[#3E369D] pb-5 relative">
      <div class="title-heading text-center py-5">
        <h2 class="text-white">
          آخرین ویدیوها
        </h2>
        <h3 class="text-[#9A94E5] pb-5">
          آخرین و بروزترین ویدیو های حوزه تکنولوژی
        </h3>
      </div>

      <div id="owl-carousel-video" class="owl-carousel owl-theme">
        <div class="item relative">
          <a class="image-blog flex justify-center" href="https://www.youtube.com/watch?v=JpxsRwnRwCQ">
            <img src="/images/pic3.png" alt="image-blog">
          </a>
          <div class="absolute play-video">
            <img src="/images/play-video.png" alt="play-video">
          </div>
        </div>
        <div class="item relative">
          <a class="image-blog flex justify-center" href="https://www.youtube.com/watch?v=JpxsRwnRwCQ">
            <img src="/images/pic2.png" alt="image-blog">
          </a>
          <div class="absolute play-video">
            <img src="/images/play-video.png" alt="play-video">
          </div>
        </div>
        <div class="item relative">
          <a class="image-blog flex justify-center" href="https://www.youtube.com/watch?v=JpxsRwnRwCQ">
            <img src="/images/pic1.png" alt="image-blog">
          </a>
          <div class="absolute play-video">
            <img src="/images/play-video.png" alt="play-video">
          </div>
        </div>
        <div class="item relative">
          <a class="image-blog flex justify-center " href="https://www.youtube.com/watch?v=JpxsRwnRwCQ">
            <img src="/images/pic4.png" alt="image-blog">
          </a>
          <div class="absolute play-video">
            <img src="/images/play-video.png" alt="play-video">
          </div>
        </div>
        <div class="item relative">
          <a class="image-blog flex justify-center" href="https://www.youtube.com/watch?v=JpxsRwnRwCQ">
            <img src="/images/pic2.png" alt="image-blog">
          </a>
          <div class="absolute play-video">
            <img src="/images/play-video.png" alt="play-video">
          </div>
        </div>
        <div class="item relative">
          <a class="image-blog flex justify-center" href="https://www.youtube.com/watch?v=JpxsRwnRwCQ">
            <img src="/images/pic1.png" alt="image-blog">
          </a>
          <div class="absolute play-video">
            <img src="/images/play-video.png" alt="play-video">
          </div>
        </div>
        <div class="item relative">
          <a class="image-blog flex justify-center " href="https://www.youtube.com/watch?v=JpxsRwnRwCQ">
            <img src="/images/pic4.png" alt="image-blog">
          </a>
          <div class="absolute play-video">
            <img src="/images/play-video.png" alt="play-video">
          </div>
        </div>
      </div>
      <div class="all-vid">
        <a href="">
          <button class="white-btn text-[18px] font-bold text-[#2C2D2E]">
            همه ی ویدیوها
          </button>
        </a>
      </div>
    </section>
    <section class="last-blog">
      <div class="container pt-4">
        <div class="row">
          <div class="col-12">
            <div class="title-heading text-center">
              <h2 class="">
                آخرین های وبلاک
              </h2>
              <h3 class="text-[#6D728E]">
                پربازدیدترین ها و مهمترین های وبلاگ
              </h3>
            </div>
          </div>
        </div>
        <div class="row items-center mb-4 pb-3 gap-y-[40px]">
          <div class="flex items-center flex-lg-row flex-column">
            <div class="image-blog flex justify-center">
              <img src="/images/pic1.png" alt="image-blog">
            </div>
            <div>
              <div class="tile-blog">
                <h5 class="card-title text-[18px] text-[#2C2D2E] font-bold pb-1">
                  عجیب ترین تکنولوژی های آینده
                </h5>
                <div class="flex items-center">
                  <img src="/images/avatar-blog1.png" alt="avatar-image">
                  <p class="text-sm text-[#6D728E] ms-4 ps-1">
                    حامد گورابی -
                    <span>
                      ۲ ساعت پیش
                    </span>
                  </p>
                </div>
                <p class="card-text text-[17px] text-[#999EBF]  lh-lg pt-3 text-lg-start text-center">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در
                </p>
              </div>
            </div>
          </div>
          <div class="flex items-center flex-lg-row flex-column">
            <div class="image-blog flex justify-center">
              <img src="/images/pic2.png" alt="image-blog">
            </div>
            <div>
              <div class="tile-blog">
                <h5 class="card-title text-[18px] text-[#2C2D2E] font-bold pb-1">
                  عجیب ترین تکنولوژی های آینده
                </h5>
                <div class="flex items-center">
                  <img src="/images/avatar-blog1.png" alt="avatar-image">
                  <p class="text-sm text-[#6D728E] ms-4 ps-1">
                    حامد گورابی -
                    <span>
                      ۲ ساعت پیش
                    </span>
                  </p>
                </div>
                <p class="card-text text-[17px] text-[#999EBF]  lh-lg pt-3 text-lg-start text-center">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در
                </p>
              </div>
            </div>
          </div>
          <div class="flex items-center flex-lg-row flex-column">
            <div class="image-blog flex justify-center">
              <img src="/images/pic3.png" alt="image-blog">
            </div>
            <div>
              <div class="tile-blog">
                <h5 class="card-title text-[18px] text-[#2C2D2E] font-bold pb-1">
                  عجیب ترین تکنولوژی های آینده
                </h5>
                <div class="flex items-center">
                  <img src="/images/avatar-blog1.png" alt="avatar-image">
                  <p class="text-sm text-[#6D728E] ms-4 ps-1">
                    حامد گورابی -
                    <span>
                      ۲ ساعت پیش
                    </span>
                  </p>
                </div>
                <p class="card-text text-[17px] text-[#999EBF]  lh-lg pt-3 text-lg-start text-center">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در
                </p>
              </div>
            </div>
          </div>
          <div class="flex items-center flex-lg-row flex-column">
            <div class="image-blog flex justify-center">
              <img src="/images/pic4.png" alt="image-blog">
            </div>
            <div>
              <div class="tile-blog">
                <h5 class="card-title text-[18px] text-[#2C2D2E] font-bold pb-1">
                  عجیب ترین تکنولوژی های آینده
                </h5>
                <div class="flex items-center">
                  <img src="/images/avatar-blog1.png" alt="avatar-image">
                  <p class="text-sm text-[#6D728E] ms-4 ps-1">
                    حامد گورابی -
                    <span>
                      ۲ ساعت پیش
                    </span>
                  </p>
                </div>
                <p class="card-text text-[17px] text-[#999EBF]  lh-lg pt-3 text-lg-start text-center">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در
                </p>
              </div>
            </div>
          </div>
          <div class="flex items-center flex-lg-row flex-column">
            <div class="image-blog flex justify-center">
              <img src="/images/pic5.png" alt="image-blog">
            </div>
            <div>
              <div class="tile-blog">
                <h5 class="card-title text-[18px] text-[#2C2D2E] font-bold pb-1">
                  عجیب ترین تکنولوژی های آینده
                </h5>
                <div class="flex items-center">
                  <img src="/images/avatar-blog1.png" alt="avatar-image">
                  <p class="text-sm text-[#6D728E] ms-4 ps-1">
                    حامد گورابی -
                    <span>
                      ۲ ساعت پیش
                    </span>
                  </p>
                </div>
                <p class="card-text text-[17px] text-[#999EBF]  lh-lg pt-3 text-lg-start text-center">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در
                </p>
              </div>
            </div>
          </div>
          <div class="flex items-center flex-lg-row flex-column">
            <div class="image-blog flex justify-center">
              <img src="/images/pic6.png" alt="image-blog">
            </div>
            <div>
              <div class="tile-blog">
                <h5 class="card-title text-[18px] text-[#2C2D2E] font-bold pb-1">
                  عجیب ترین تکنولوژی های آینده
                </h5>
                <div class="flex items-center">
                  <img src="/images/avatar-blog1.png" alt="avatar-image">
                  <p class="text-sm text-[#6D728E] ms-4 ps-1">
                    حامد گورابی -
                    <span>
                      ۲ ساعت پیش
                    </span>
                  </p>
                </div>
                <p class="card-text text-[17px] text-[#999EBF]  lh-lg pt-3 text-lg-start text-center">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="btn-blog">
              <button class="btn-md pink-btn">
                <NuxtLink to="/blog/category" title="بیشتر بخوانید">
                  بیشتر بخوانید
                </NuxtLink>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
