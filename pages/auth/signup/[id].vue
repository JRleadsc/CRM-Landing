<template>
  <div class="mt-20">
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
                  درخواست دمو
                </li>
              </ol>
            </nav>
          </div>
          <div class="text-start">
            <h1 class="d-none d-md-block text-[36px] font-bold text-[#3E369D] pb-2.5">
              نرم افزار مدیریت مشتریان خود را آماده کنید
            </h1>
            <h1 class="d-block d-md-none text-base font-bold text-[#3E369D] pb-2.5">
              نرم افزار مدیریت مشتریان خود را آماده کنید
            </h1>
            <p class="heading_p pb-4 lh-lg">
              این فقط چند دقیقه طول می کشد
            </p>
          </div>
        </div>

        <RequestSignup />
      </div>
    </div>
  </div>
</template>
