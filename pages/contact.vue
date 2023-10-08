
<template>
  <div class="mt-20">
    <div class="header-overlay" />

    <section class="">
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
                    تماس با ما
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="contact-us flex items-center">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="heading heading-contact flex items-center">
              <h1 class="heading_h pe-5 me-3 ">
                تماس با ما
              </h1>
              <div class="social flex items-center">
                <!-- <div>
                  <a href="">
                    <img src="/images/social/facebook.png" alt="facebook">
                  </a>
                </div> -->
                <div>
                  <a href="https://t.me/linkgns" target="_blank" class="text-[#3E369D]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19c-.14.75-.42 1-.68 1.03c-.58.05-1.02-.38-1.58-.75c-.88-.58-1.38-.94-2.23-1.5c-.99-.65-.35-1.01.22-1.59c.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02c-.09.02-1.49.95-4.22 2.79c-.4.27-.76.41-1.08.4c-.36-.01-1.04-.2-1.55-.37c-.63-.2-1.12-.31-1.08-.66c.02-.18.27-.36.74-.55c2.92-1.27 4.86-2.11 5.83-2.51c2.78-1.16 3.35-1.36 3.73-1.36c.08 0 .27.02.39.12c.1.08.13.19.14.27c-.01.06.01.24 0 .38z" /></svg>
                  </a>
                </div>
                <div>
                  <a href="https://twitter.com/Jrleadsco?s=09" target="_blank" class="text-[#3E369D]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M15.021 3.343c.509-.087 1.078-.116 1.614-.025a4.85 4.85 0 0 1 2.54 1.273c.456.01.905-.08 1.302-.208a5.36 5.36 0 0 0 1.098-.501l.009-.006a.75.75 0 0 1 1.042 1.037c-.207.315-.496.877-.819 1.507l-.155.301c-.185.36-.375.724-.552 1.036c-.111.196-.23.395-.35.567v.274A12.34 12.34 0 0 1 8.287 21.03a12.32 12.32 0 0 1-6.694-1.97a.75.75 0 0 1 .5-1.374a7.471 7.471 0 0 0 4.033-.642a4.858 4.858 0 0 1-2.61-2.922a.75.75 0 0 1 .147-.722l.01-.01A4.848 4.848 0 0 1 2.05 9.793v-.052a.75.75 0 0 1 .553-.724A4.84 4.84 0 0 1 2.09 6.84a4.9 4.9 0 0 1 .65-2.442a.75.75 0 0 1 1.232-.1a10.89 10.89 0 0 0 7.006 3.93a4.85 4.85 0 0 1 2.562-4.406c.402-.214.934-.385 1.482-.479ZM3.743 10.891a3.35 3.35 0 0 0 2.503 2.164a.75.75 0 0 1 .072 1.453c-.272.083-.551.14-.834.173a3.358 3.358 0 0 0 2.59 1.3a.75.75 0 0 1 .45 1.339a8.97 8.97 0 0 1-3.548 1.695a10.82 10.82 0 0 0 3.313.515h.009A10.838 10.838 0 0 0 19.25 8.607v-.535a.75.75 0 0 1 .186-.495c.07-.079.19-.261.36-.56c.16-.282.338-.622.523-.981l.033-.066a4.992 4.992 0 0 1-1.593.097a.75.75 0 0 1-.47-.237a3.35 3.35 0 0 0-1.904-1.032a3.42 3.42 0 0 0-1.11.025a3.605 3.605 0 0 0-1.028.323a3.35 3.35 0 0 0-1.678 3.74a.75.75 0 0 1-.767.925a12.39 12.39 0 0 1-8.149-3.627a3.41 3.41 0 0 0-.063.657v.002a3.34 3.34 0 0 0 1.486 2.785A.75.75 0 0 1 4.64 11a4.798 4.798 0 0 1-.897-.11Z" clip-rule="evenodd" /></svg>
                  </a>
                </div>
                <div>
                  <a href="https://instagram.com/linkgns" target="_blank" class="text-[#3E369D]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z" /></svg>
                  </a>
                </div>
                <div>
                  <a href="https://www.linkedin.com/company/jrlead/" target="_blank" class="text-[#3E369D]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M9.429 8.969h3.714v1.85c.535-1.064 1.907-2.02 3.968-2.02c3.951 0 4.889 2.118 4.889 6.004V22h-4v-6.312c0-2.213-.535-3.461-1.897-3.461c-1.889 0-2.674 1.345-2.674 3.46V22h-4V8.969ZM2.57 21.83h4V8.799h-4V21.83ZM7.143 4.55a2.53 2.53 0 0 1-.753 1.802a2.573 2.573 0 0 1-1.82.748a2.59 2.59 0 0 1-1.818-.747A2.548 2.548 0 0 1 2 4.55c0-.677.27-1.325.753-1.803A2.583 2.583 0 0 1 4.571 2c.682 0 1.336.269 1.819.747c.482.478.753 1.126.753 1.803Z" clip-rule="evenodd" /></svg>
                  </a>
                </div>
                <!-- <div>
                  <a href="">
                    <img src="/images/social/whatsapp.png" alt="whatsapp">
                  </a>
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="contact-info pt-4 pb-5">
              <div class="flex items-center contact-details">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
                    <g id="Group_31879" data-name="Group 31879" transform="translate(-120 -392)">
                      <g id="background" transform="translate(120 392)" fill="rgba(255,255,255,0)" stroke="#fff" stroke-width="2">
                        <rect width="50" height="50" rx="16" stroke="none" />
                        <rect
                          x="1"
                          y="1"
                          width="48"
                          height="48"
                          rx="15"
                          fill="none"
                        />
                      </g>
                      <g id="Group_31878" data-name="Group 31878" transform="translate(-263 -628.131)">
                        <path id="Path_207" data-name="Path 207" d="M283.094,357.674a.652.652,0,0,0-.067.223.537.537,0,1,0,1.07.089,1.088,1.088,0,0,1,.022-.245V357.5a5.881,5.881,0,0,0-.312-1.871,5.556,5.556,0,0,0-3.788-3.5,5.91,5.91,0,0,0-1.4-.178,3.815,3.815,0,0,0-.49.022l-.468.067a.52.52,0,1,0,.178,1.025,2.191,2.191,0,0,1,.379-.045h.067c.111,0,.223-.022.334-.022a4.409,4.409,0,0,1,3.164,1.315,4.491,4.491,0,0,1,1.314,3.119v.245Zm0,0" transform="translate(129.415 687.819)" fill="#3e369d" />
                        <path id="Path_208" data-name="Path 208" d="M279.37,321.225a.537.537,0,1,0,1.07.089c.022-.245.022-.49.022-.735a10,10,0,0,0-.111-1.426,8.547,8.547,0,0,0-7.731-7.085c-.223-.022-.468-.022-.691-.022-.245,0-.49,0-.735.022s-.49.045-.735.089a.52.52,0,1,0,.178,1.025c.156-.022.29-.045.446-.067.067,0,.134-.022.2-.022a6.454,6.454,0,0,1,.646-.022,7.682,7.682,0,0,1,2.161.312,7.409,7.409,0,0,1,3.142,1.872,7.659,7.659,0,0,1,1.671,2.518,7.53,7.53,0,0,1,.535,2.763v.223a1.815,1.815,0,0,0-.067.468Zm0,0" transform="translate(136.486 724.139)" fill="#3e369d" />
                        <path id="Path_209" data-name="Path 209" d="M273.185,274.357a11.567,11.567,0,0,0-8.222-3.409c-.334,0-.668.022-1,.044a7.761,7.761,0,0,0-1,.134.52.52,0,1,0,.178,1.025c.156-.022.289-.045.446-.067a3.353,3.353,0,0,1,.468-.044c.312-.022.6-.045.913-.045a10.5,10.5,0,0,1,10.516,10.516V283c0,.134-.022.267-.022.424a.537.537,0,0,0,1.07.089c.022-.334.044-.668.044-.98a11.536,11.536,0,0,0-3.386-8.177Zm0,0" transform="translate(143.429 762.184)" fill="#3e369d" />
                        <path id="Path_210" data-name="Path 210" d="M166.151,298.989l-4.131-2.277c-1.377-.767-1.424-.264-2.87,1.318-.35.383-1,1.39-1.774,1.2-1.61-.408-4.621-2.828-5.6-3.93-.467-.527-2.474-3.044-2.5-3.858-.046-1.246,2.614-1.869,1.75-4.242l-1.844-4.242c-1.727-4.074-6.558,2.444-6.161,5.488,1.027,7.5,13.839,19.628,20.98,15.625,1.587-.911,3.734-4.1,2.147-5.08Zm0,0" transform="translate(252.999 752.272)" fill="#3e369d" />
                      </g>
                    </g>
                  </svg>

                </span>
                <p class="ltr">
                  02188751622
                </p>
              </div>
              <div class="flex items-center contact-details">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
                    <g id="Group_31880" data-name="Group 31880" transform="translate(-120 -392)">
                      <g id="background" transform="translate(120 392)" fill="rgba(255,255,255,0)" stroke="#fff" stroke-width="2">
                        <rect width="50" height="50" rx="16" stroke="none" />
                        <rect
                          x="1"
                          y="1"
                          width="48"
                          height="48"
                          rx="15"
                          fill="none"
                        />
                      </g>
                      <g id="Group_31881" data-name="Group 31881" transform="translate(-259.422 -498.176)">
                        <path id="Path_203" data-name="Path 203" d="M127.645,160.317l-2.826-2.738-8.061,7.666a1.558,1.558,0,0,0,1.121.489h19.531a1.573,1.573,0,0,0,1.121-.489l-8.061-7.666Zm0,0" transform="translate(276.798 758.442)" fill="#3e369d" />
                        <path id="Path_204" data-name="Path 204" d="M138.652,97.672a1.22,1.22,0,0,0-.953-.477l-19.931.085a1.59,1.59,0,0,0-1.12.477l10.966,10.357Z" transform="translate(276.832 808.981)" fill="#3e369d" />
                        <path id="Path_205" data-name="Path 205" d="M113.285,107.178v14.5l7.833-7.173Zm0,0" transform="translate(279.137 800.741)" fill="#3e369d" />
                        <path id="Path_206" data-name="Path 206" d="M213.692,114.42l7.827,7.368V107.119Z" transform="translate(194.902 800.799)" fill="#3e369d" />
                      </g>
                    </g>
                  </svg>
                </span>
                <p class="ltr">
                  support@linkgns.com
                </p>
              </div>
              <div class="flex items-center contact-details">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
                    <g id="Group_31882" data-name="Group 31882" transform="translate(-120 -392)">
                      <g id="background" transform="translate(120 392)" fill="rgba(255,255,255,0)" stroke="#fff" stroke-width="2">
                        <rect width="50" height="50" rx="16" stroke="none" />
                        <rect
                          x="1"
                          y="1"
                          width="48"
                          height="48"
                          rx="15"
                          fill="none"
                        />
                      </g>
                      <path id="icon" d="M-46.378,399.863a7.607,7.607,0,0,0-.375-.96,7.8,7.8,0,0,0-7.355-5.013A7.913,7.913,0,0,0-62,401.335v1.024c0,.043.014.427.034.619.289,2.389,2.114,4.928,3.476,7.317,1.466,2.56,2.987,5.078,4.494,7.595.929-1.643,1.855-3.307,2.763-4.906.247-.47.535-.939.782-1.387.165-.3.481-.6.625-.874,1.466-2.773,3.825-5.568,3.825-8.32v-1.131a8.722,8.722,0,0,0-.378-1.408ZM-54.044,405A2.844,2.844,0,0,1-56.762,403a2.873,2.873,0,0,1-.076-.747v-.661a2.723,2.723,0,0,1,2.884-2.73,2.975,2.975,0,0,1,2.929,3.072A3.048,3.048,0,0,1-54.044,405Zm0,0" transform="translate(199 11.11)" fill="#3e369d" />
                    </g>
                  </svg>

                </span>
                <p>
                  تهران، گاندی، نبش هشتم، ساختمان مروارید، طبقه چهارم
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <ContactRequest />
  </div>
</template>
