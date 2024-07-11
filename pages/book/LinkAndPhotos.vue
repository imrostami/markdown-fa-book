<script setup lang="ts">
const linkStruct = `[متن لینک](آدرس لینک)`
const googleLInk = `[وبسایت گوگل](https://www.google.com)`
const idHeading = `## بخش مورد نظر`


useSeoMeta({
  author: 'محمد داداش رستمی',
  title: 'راهنمای جامع Markdown - کار با لینک ها و تصاویر',
  ogTitle: 'راهنمای جامع Markdown - کار با لینک ها و تصاویر',
  description: 'در این راهنما با نحوه کار با لینک‌ها و تصاویر در Markdown آشنا شوید. لینک‌ها و تصاویر ابزارهای مهمی برای بهبود محتوای شما هستند و با استفاده از Markdown، می‌توانید به راحتی آن‌ها را در متن خود اضافه کنید و محتوایتان را بهبود دهید.',
  ogDescription: 'در این راهنما با نحوه کار با لینک‌ها و تصاویر در Markdown آشنا شوید. لینک‌ها و تصاویر ابزارهای مهمی برای بهبود محتوای شما هستند و با استفاده از Markdown، می‌توانید به راحتی آن‌ها را در متن خود اضافه کنید و محتوایتان را بهبود دهید.',
  ogImage: 'https://bairesdev.mo.cloudinary.net/blog/2023/08/golang.jpg?tx=w_1920,q_auto',
  robots: 'index, follow',
  colorScheme: 'dark light',
  charset: 'utf-8',
  keywords: 'Markdown, راهنمای Markdown, آموزش Markdown, لینک‌ها در Markdown, تصاویر در Markdown, کار با لینک‌ها و تصاویر, زبان نشانه‌گذاری'
});

</script>

<template>
  <DocContainer page-title="کار با لینک ها و تصاویر در Markdown">
    <div class="paragraph-container">
      <Paragraph>
        لینک‌های خارجی برای ارجاع به منابع یا صفحات وب خارج از سند فعلی استفاده می‌شوند. برای ایجاد یک لینک خارجی، از
        ساختار زیر استفاده کنید:
      </Paragraph>
      <CodeBlock :code="linkStruct"></CodeBlock>
      <paragraph>
        <strong>متن لینک:</strong>
        متنی که داخل براکت‌ها [ ] قرار می‌گیرد، متنی است که به عنوان لینک نمایش داده می‌شود.
      </paragraph>
      <paragraph>
        <strong>آدرس لینک:</strong>
        URL یا آدرس وب‌سایتی که می‌خواهید به آن ارجاع دهید، داخل پرانتز ( ) قرار می‌گیرد.
      </paragraph>

      <paragraph>مثلا اگر بخواهیم یک لینک به سایت گوگل داشته باشیم به صورت زیر عمل میکنیم</paragraph>

      <code-example :code="googleLInk">
        <a href="https://www.google.com">وبسایت گوگل</a>
        ّ
      </code-example>
    </div>
    <div class="paragraph-container">
      <h3>لینک‌های داخلی</h3>
      <paragraph>
        لینک‌های داخلی برای ارجاع به بخش‌های مختلف در همان سند استفاده می‌شوند. برای این کار، ابتدا باید به بخش مورد نظر
        یک شناسه (anchor) اختصاص دهید و سپس از آن شناسه برای ایجاد لینک داخلی استفاده کنید.
      </paragraph>
      <h4>1. ایجاد شناسه (Anchor)</h4>
      <paragraph>
        شناسه‌ها معمولاً با استفاده از عناوین (Headers) ایجاد می‌شوند. به عنوان مثال، فرض کنید یک عنوان به صورت زیر
        دارید:
      </paragraph>
      <code-block :code="idHeading"></code-block>
      <paragraph>
        Markdown به طور خودکار برای این عنوان یک شناسه ایجاد می‌کند که معمولاً با خط تیره (dash) بین کلمات نمایش داده
        می‌شود. در این مثال، شناسه
        <strong> بخش-مورد-نظر</strong>
        خواهد بود.
      </paragraph>
      <h4>2. ایجاد لینک داخلی</h4>
      <paragraph>برای ایجاد یک لینک داخلی به این بخش، از ساختار زیر استفاده کنید:</paragraph>
      <code-block code="[متن لینک](#شناسه)"></code-block>
      <paragraph>برای مثال :</paragraph>
      <code-example code="[بخش مورد نظر](#بخش-مورد-نظر)">
        <a href="#بخش-مورد-نظر">بخش مورد نظر</a>
      </code-example>
    </div>
    <div class="paragraph-container">
      <h3>استفاده از تصاویر در Markdown</h3>
      <paragraph>
        افزودن تصاویر به مستندات Markdown، زیبایی و خوانایی آنها را افزایش می‌دهد و اطلاعات بصری مفیدی ارائه می‌دهد. برای درج تصاویر در Markdown، از ساختار ساده‌ای استفاده می‌شود.
      </paragraph>

      <code-block code="![متن جایگزین](آدرس تصویر)"></code-block>
      <paragraph>
       <strong> متن جایگزین (alt text):</strong>
        متنی که در صورت عدم بارگذاری تصویر نمایش داده می‌شود. این متن برای دسترسی‌پذیری و بهینه‌سازی موتورهای جستجو نیز مفید است.

        <strong>آدرس تصویر:</strong>
         URL یا مسیر محلی فایل تصویری که می‌خواهید نمایش داده شود.

      </paragraph>
      <paragraph>
        برای مثال  میتونیم یک عکس از Lorem Picsum رو اینجوری نشون بدیم
      </paragraph>
      <lazy-code-example code="![نمونه تصویر](https://picsum.photos/200/300)">
        <img src="https://picsum.photos/200/300" alt="sample-image"/>
      </lazy-code-example>
      <paragraph>
        تفاوتی که مابین لینک معمولی و تصویر وجود داره
        این هست که برای نمایش عکس باید از ! در ابتدای لینکمون استفاده کنیم تا برامون نمایش داده بشه
      </paragraph>

    </div>
    <div class="paragraph-container">
      <h3>تصاویر با مسیر مطلق</h3>
      <paragraph>برای تنظیم مسیر مطلق میتون از این الگو استفاده کرد</paragraph>
      <code-example code="![my image](/assets/img/my image.jpg)">
        <img src="/assets/img/my image.jpg" alt="my image"/>
      </code-example>
      <paragraph>مسیر مطلق مسیری هست که تصاویر در کنار فایل مارک داون قرار دارند و توسط یک مسیر نسبی به تصویر دسترسی پیدا میکنیم و میتونیم اون رو نشون بدیم</paragraph>
    </div>

  </DocContainer>
</template>

<style scoped>

</style>