<script setup>
  const text = "آنچه می دانیم قطره است و آنچه نمی دانیم اقیانوس - آیزاک نیوتن"
  const code = `> ${text}`
  const nestedCode = `>>  ${text}`
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