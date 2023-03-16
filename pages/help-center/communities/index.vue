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
                    <NuxtLink to="/help-center">
                      بخش آموزش
                    </NuxtLink>
                  </li>
                  <li class="breadcrumb-item text-sm text-[#6D728E] active" aria-current="page">
                    انجمن‌های گفتگو
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="help_search pb-5 mb-5">
      <div class="container">
        <div class="row gap-30 justify-center pt-5 mt-5">
          <div class="community-cards">
            <NuxtLink to="/help-center/communities/single">
              <div class="relative flex comunity-card">
                <div class="card-item z-20">
                  <h2>
                    راهی به سمت مدیترانه؟
                  </h2>
                  <p>
                    نحوه مقاله ها و راهنماها را برای همه LinkGenus بخوانید
                  </p>
                </div>
                <div class="absolute border_help_card z-10 bg-gradient-to-r from-[#EC4EAE] to-[#40AAE2] w-full mx-auto" />
              </div>
            </NuxtLink>
            <NuxtLink to="/help-center/communities/single">
              <div class="relative flex comunity-card">
                <div class="card-item z-20">
                  <h2>
                    توسعه دهنده LinkGenius
                  </h2>
                  <p>
                    نحوه مقاله ها و راهنماها را برای همه LinkGenus بخوانید
                  </p>
                </div>
                <div class="absolute border_help_card z-10 bg-gradient-to-r from-[#EC4EAE] to-[#40AAE2] w-full mx-auto" />
              </div>
            </NuxtLink>
            <NuxtLink to="/help-center/communities/single">
              <div class="relative flex comunity-card">
                <div class="card-item z-20">
                  <h2>
                    توسعه دهنده LinkGenius
                  </h2>
                  <p>
                    نحوه مقاله ها و راهنماها را برای همه LinkGenus بخوانید
                  </p>
                </div>
                <div class="absolute border_help_card z-10 bg-gradient-to-r from-[#EC4EAE] to-[#40AAE2] w-full mx-auto" />
              </div>
            </NuxtLink>
            <NuxtLink to="/help-center/communities/single">
              <div class="relative flex comunity-card">
                <div class="card-item z-20">
                  <h2>
                    توسعه دهنده LinkGenius
                  </h2>
                  <p>
                    نحوه مقاله ها و راهنماها را برای همه LinkGenus بخوانید
                  </p>
                </div>
                <div class="absolute border_help_card z-10 bg-gradient-to-r from-[#EC4EAE] to-[#40AAE2] w-full mx-auto" />
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
    <section class="conversation pb-5 mb-3">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="text-md-start text-center px-md-0 px-4 lh-lg">
              <h3>
                انجمن های گفتگوی پر بازدید
              </h3>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div id="accordionPanelsStayOpenExample" class="accordion">
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
                    متن سوالی که کاربران می پرسند؟
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                  <div class="accordion-body">
                    بخش هایی از رایانه شما وجود دارد که ممکن است بخواهید آنها را به اشتراک بگذارید - برای مثال برنامه های خود. موارد دیگری وجود دارد - اسناد خصوصی، پوشه‌های تصویر شخصی - که شما ندارید.
                    <a href="">بیشتر بخوانید</a>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 id="panelsStayOpen-headingTwo" class="accordion-header">
                  <button
                    class="accordion-button "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTwo"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseTwo"
                  >
                    متن سوالی که کاربران می پرسند؟
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                  <div class="accordion-body">
                    بخش هایی از رایانه شما وجود دارد که ممکن است بخواهید آنها را به اشتراک بگذارید - برای مثال برنامه های خود. موارد دیگری وجود دارد - اسناد خصوصی، پوشه‌های تصویر شخصی - که شما ندارید.
                    <a href="">بیشتر بخوانید</a>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 id="panelsStayOpen-headingThree" class="accordion-header">
                  <button
                    class="accordion-button "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseThree"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseThree"
                  >
                    متن سوالی که کاربران می پرسند؟
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                  <div class="accordion-body">
                    بخش هایی از رایانه شما وجود دارد که ممکن است بخواهید آنها را به اشتراک بگذارید - برای مثال برنامه های خود. موارد دیگری وجود دارد - اسناد خصوصی، پوشه‌های تصویر شخصی - که شما ندارید.
                    <a href="">بیشتر بخوانید</a>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 id="panelsStayOpen-headingFour" class="accordion-header">
                  <button
                    class="accordion-button "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseFour"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseFour"
                  >
                    متن سوالی که کاربران می پرسند؟
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
                  <div class="accordion-body">
                    بخش هایی از رایانه شما وجود دارد که ممکن است بخواهید آنها را به اشتراک بگذارید - برای مثال برنامه های خود. موارد دیگری وجود دارد - اسناد خصوصی، پوشه‌های تصویر شخصی - که شما ندارید.
                    <a href="">بیشتر بخوانید</a>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 id="panelsStayOpen-headingFive" class="accordion-header">
                  <button
                    class="accordion-button "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseFive"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseFive"
                  >
                    متن سوالی که کاربران می پرسند؟
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFive">
                  <div class="accordion-body">
                    بخش هایی از رایانه شما وجود دارد که ممکن است بخواهید آنها را به اشتراک بگذارید - برای مثال برنامه های خود. موارد دیگری وجود دارد - اسناد خصوصی، پوشه‌های تصویر شخصی - که شما ندارید.
                    <a href="">بیشتر بخوانید</a>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 id="panelsStayOpen-headingSix" class="accordion-header">
                  <button
                    class="accordion-button "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseSix"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseSix"
                  >
                    متن سوالی که کاربران می پرسند؟
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseSix" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingSix">
                  <div class="accordion-body">
                    بخش هایی از رایانه شما وجود دارد که ممکن است بخواهید آنها را به اشتراک بگذارید - برای مثال برنامه های خود. موارد دیگری وجود دارد - اسناد خصوصی، پوشه‌های تصویر شخصی - که شما ندارید.
                    <a href="">بیشتر بخوانید</a>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 id="panelsStayOpen-headingSeven" class="accordion-header">
                  <button
                    class="accordion-button "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseSeven"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseSeven"
                  >
                    متن سوالی که کاربران می پرسند؟
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseSeven" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingSeven">
                  <div class="accordion-body">
                    بخش هایی از رایانه شما وجود دارد که ممکن است بخواهید آنها را به اشتراک بگذارید - برای مثال برنامه های خود. موارد دیگری وجود دارد - اسناد خصوصی، پوشه‌های تصویر شخصی - که شما ندارید.
                    <a href="">بیشتر بخوانید</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
