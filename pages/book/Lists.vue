<script setup lang="ts">
    const unorderedListCode = `
    - آیتم اول
- آیتم دوم
  - زیرآیتم اول
  - زیرآیتم دوم
- آیتم سوم
`

    const unorderedListCode1 = `
    + آیتم اول
+ آیتم دوم
  + زیرآیتم اول
  + زیرآیتم دوم
+ آیتم سوم
`

    const unorderedListCode2 = `
    * آیتم اول
* آیتم دوم
  * زیرآیتم اول
  * زیرآیتم دوم
* آیتم سوم
`

    const orderedListCode = ``
</script>

<template>
  <DocContainer page-title="لیست ها در Markdown">
    <div class="paragraph-container">
      <paragraph>در Markdown، لیست‌ها به دو نوع اصلی تقسیم می‌شوند: لیست‌های شماره‌گذاری شده (ترتیبی) و لیست‌های
        نشانه‌دار (غیرترتیبی).
      </paragraph>
    </div>
    <div class="paragraph-container">
      <h3>لیست‌های نشانه‌دار (غیرترتیبی)</h3>
      <paragraph>
        برای ایجاد لیست نشانه‌دار از
        <code class="code-bubble">-</code>
        یا
        <code class="code-bubble">*</code>
        یا
        <code class="code-bubble">+</code>
        به همراه یک فاصله استفاده می‌کنیم. مثال:

        <CodeExample :code="unorderedListCode">
          <ul>
            <li>آیتم اول</li>
            <li>آیتم دوم<ul>
              <li>زیرآیتم اول</li>
              <li>زیرآیتم دوم</li>
            </ul>
            </li>
            <li>آیتم سوم</li>
          </ul>

        </CodeExample>
      </paragraph>

      <paragraph>یا به این صورت :</paragraph>
      <CodeExample :code="unorderedListCode1">
        <ul>
          <li>آیتم اول</li>
          <li>آیتم دوم<ul>
            <li>زیرآیتم اول</li>
            <li>زیرآیتم دوم</li>
          </ul>
          </li>
          <li>آیتم سوم</li>
        </ul>

      </CodeExample>


      <paragraph>و یا به این صورت :</paragraph>
      <CodeExample :code="unorderedListCode2">
        <ul>
          <li>آیتم اول</li>
          <li>آیتم دوم<ul>
            <li>زیرآیتم اول</li>
            <li>زیرآیتم دوم</li>
          </ul>
          </li>
          <li>آیتم سوم</li>
        </ul>
      </CodeExample>
      <paragraph>میتونیم یک لیست بدون علامت یا در واقع unordered List در Markdown ایجاد کنیم</paragraph>
    </div>
    <div class="paragraph-container">
      <h3>لیست‌های شماره‌گذاری شده (ترتیبی)</h3>
      <paragraph>
        برای ایجاد لیست شماره‌گذاری شده از اعداد به همراه یک نقطه و یک فاصله استفاده می‌کنیم. مثال:
      </paragraph>
      <CodeExample :code="orderedListCode">

      </CodeExample>
    </div>
  </DocContainer>
</template>

<style scoped>

</style>