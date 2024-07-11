<template>
  <DocContainer page-title="Markdown چطور کار میکنه ؟">
    <div class="paragraph-container">
      <Paragraph>
        نوشتن با Markdwon آسان است اما بهتر است نگاهی به شیوه کارکرد بندازیم
      </Paragraph>
      <paragraph>
        فایل های مارک داون تماما با فرمت md ذخیره می شوند مثلا
          <code class="code-bubble">document.md</code>
        که این فایل ها مشخصا دارای اطلاعات نوشته شده توسط شما و قواعد مارکداون در مابین محتوای شماست
        کل ساختار فایل  md ایجاد شده
        توسط مترجم یا به اصطلاح Parser به محتوای قابل خواندن که معمولا html می باشند تبدیل می شوند
        تا در مرورگر قابل اجرا و نمایش باشند
      </paragraph>
      <AppImage source="/BookImages/markdownToHTML.jpg" alt="markdown to html conversion steps"/>
    </div>

  </DocContainer>
</template>


<script setup>
useSeoMeta({
  author: 'محمد داداش رستمی',
  title: 'راهنمای جامع Markdown - چگونه کار می‌کند',
  ogTitle: 'راهنمای جامع Markdown - چگونه کار می‌کند',
  description: 'در این راهنما به شما توضیح می‌دهیم که Markdown چگونه کار می‌کند و چگونه می‌توانید از آن برای نوشتن متن‌های ساده و قابل خواندن استفاده کنید. Markdown یک زبان نشانه‌گذاری سبک و کاربردی است که به شما اجازه می‌دهد به سرعت و به سادگی محتوای خود را ساختاردهی کنید.',
  ogDescription: 'Markdown چگونه کار می‌کند و چگونه می‌توانید از آن برای نوشتن متن‌های ساده و قابل خواندن استفاده کنید؟ در این راهنمای جامع با اصول و کاربردهای این زبان نشانه‌گذاری سبک و کاربردی آشنا شوید.',
  ogImage: 'https://cdn.icon-icons.com/icons2/1377/PNG/512/textxmarkdown_92778.png',
  robots: 'index, follow',
  colorScheme: 'dark light',
  charset: 'utf-8',
  keywords: 'Markdown, راهنمای Markdown, آموزش Markdown, Markdown چگونه کار می‌کند, زبان نشانه‌گذاری, ساختاردهی محتوا'
});



</script>
