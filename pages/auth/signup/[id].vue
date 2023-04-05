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
          <div class="text-md-start text-center">
            <h1 class="heading_h">
              نرم افزار مدیریت مشتریان خود را آماده کنید
            </h1>
            <p class="heading_p pb-4 lh-lg ">
              این فقط چند دقیقه طول می کشد
            </p>
          </div>
        </div>

        <RequestSignup />
      </div>
    </div>
  </div>
</template>
