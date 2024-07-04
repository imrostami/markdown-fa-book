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
  author:'محمد داداش رستمی',
  title:'راهنمای جامع Markdown - Markdown چطور کار میکنه؟',
  ogTitle:'راهنمای جامع Markdown - Markdown چطور کار میکنه؟',
  description:'مارک داون چیست ؟ در سال 2004 با این ایده که بتواند خواندن و نوشتن یک متن تحت وب را برای همه آسان کند و قابل تبدیل به خانواده HTML هم باشد به وجود آمد. از Markdown به عنوان یک استاندارد متن نویسی یاد می‌شود و بزرگترین مزیت این استاندارد استفاده از حروف ساده و کوتاه برای اهداف نگارشی (از جمله پررنگ کردن متن و .... ) می‌باشد',
  ogDescription:'مارک داون چیست ؟ در سال 2004 با این ایده که بتواند خواندن و نوشتن یک متن تحت وب را برای همه آسان کند و قابل تبدیل به خانواده HTML هم باشد به وجود آمد. از Markdown به عنوان یک استاندارد متن نویسی یاد می‌شود و بزرگترین مزیت این استاندارد استفاده از حروف ساده و کوتاه برای اهداف نگارشی (از جمله پررنگ کردن متن و .... ) می‌باشد',
  robots: 'index, follow',
  colorScheme:'dark light',
  charset:'utf-8'

})
</script>