<script setup>
  const text = "آنچه می دانیم قطره است و آنچه نمی دانیم اقیانوس - آیزاک نیوتن"
  const code = `> ${text}`
  const nestedCode = `>>  ${text}`

  useSeoMeta({
    author: 'محمد داداش رستمی',
    title: 'راهنمای جامع Markdown - راهنمای ایجاد نقل قول در Markdown',
    ogTitle: 'راهنمای جامع Markdown - راهنمای ایجاد نقل قول در Markdown',
    description: 'در این راهنما با نحوه ایجاد نقل قول در Markdown آشنا شوید. نقل قول‌ها یکی از ابزارهای مهم برای ارجاع به متن‌های دیگر و نمایش محتوای بیرونی در Markdown هستند. با استفاده از Markdown، می‌توانید به راحتی نقل قول‌هایی را در متن خود اضافه کنید و محتوایتان را بهبود دهید.',
    ogDescription: 'در این راهنما با نحوه ایجاد نقل قول در Markdown آشنا شوید. نقل قول‌ها یکی از ابزارهای مهم برای ارجاع به متن‌های دیگر و نمایش محتوای بیرونی در Markdown هستند. با استفاده از Markdown، می‌توانید به راحتی نقل قول‌هایی را در متن خود اضافه کنید و محتوایتان را بهبود دهید.',
    ogImage: 'https://cdn.icon-icons.com/icons2/1377/PNG/512/textxmarkdown_92778.png',
    robots: 'index, follow',
    colorScheme: 'dark light',
    charset: 'utf-8',
    keywords: 'Markdown, راهنمای Markdown, آموزش Markdown, ایجاد نقل قول در Markdown, نقل قول در Markdown, زبان نشانه‌گذاری'
  });

</script>

<template>
    <DocContainer page-title="ایجاد نقل قول (Blockquote)">
      <div class="paragraph-container">
        <Paragraph>
          نقل قول ها یا آصطلاحا
          Blockquote
          ها به ما این امکان رو میدهند که بتونیم داخل اون ها یک نوشته یا متن رو از یک منبع نقل قول کنیم
        </Paragraph>
        <Paragraph>
          برای ایجاد یک نقل قول در Markdown به شکل زیر عمل میکنیم :
        </Paragraph>

        <CodeExample :code="code">
            <blockquote class=" q-block text-justify">
              {{text}}
            </blockquote>
        </CodeExample>

        <paragraph>همونطور که در نمونه کد مشخص شده برای نوشتن نقل قول باید متن نقل قول خود را بعد از علامت
        <code class="code-bubble">
          >
        </code>
          قرار دهیم البته به این مسئله توجه کنیم که مابین محتوا و علامت < یک فاصله مثل همیشه وجود دارد تا مترجم Markdown بتواند نوشته ما را ترجمه کند
        </paragraph>
      </div>

      <div class="paragraph-container">
        <h3>ایجاد نقل قول های تو در تو</h3>
        <paragraph>برای ایجاد نقل قول های تو در تو میتونیم به هر تعداد که میخوایم علامت
        <code class="code-bubble">
          >
        </code>
          رو کنار هم قرار دهیم تا تو در تو بودن نقل قول مشخص شود
        </paragraph>

        <CodeExample :code="nestedCode">
          <blockquote class=" q-block text-justify m-0 py-2">
            <blockquote class=" q-block text-justify m-0">
              {{text}}
            </blockquote>
          </blockquote>
        </CodeExample>
      </div>

    </DocContainer>
</template>

<style scoped>

</style>