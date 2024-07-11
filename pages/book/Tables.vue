<script setup lang="ts">
    const tableBasic = `
    | سرستون 1 | سرستون 2 | سرستون 3 |
| -------- | -------- | -------- |
| داده 1   | داده 2   | داده 3   |
| داده 4   | داده 5   | داده 6   |
`

    const tableCenter = `
    | سرستون 1 | سرستون 2 | سرستون 3 |
| :------- |:--------:| --------:|
| داده 1   | داده 2   | داده 3   |
| داده 4   | داده 5   | داده 6   |
`
</script>

<template>
  <doc-container page-title="کار با جداول در Markdown">
      <div class="paragraph-container">
        <paragraph>
          جدول‌ها در Markdown برای نمایش داده‌های ساختاریافته به صورت سازمان‌یافته و خوانا استفاده می‌شوند. ایجاد جدول در Markdown با استفاده از خطوط افقی و عمودی، و همچنین علائم تفکیک‌کننده ستون‌ها انجام می‌شود.
        </paragraph>
      </div>
    <div class="paragraph-container">
      <h3>ساختار جداول در Markdown</h3>
      <paragraph>
        یک جدول در Markdown با استفاده از خط تیره (-) برای ایجاد ردیف سرصفحه و خط عمودی (|) برای جدا کردن ستون‌ها ساخته می‌شود.
      </paragraph>
      <code-example :code="tableBasic">
        <table class="table table-responsive">
          <thead>
          <tr>
            <th>سرستون 1</th>
            <th>سرستون 2</th>
            <th>سرستون 3</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>داده 1</td>
            <td>داده 2</td>
            <td>داده 3</td>
          </tr>
          <tr>
            <td>داده 4</td>
            <td>داده 5</td>
            <td>داده 6</td>
          </tr>
          </tbody>
        </table>

      </code-example>
    </div>
    <div class="paragraph-container">
      <h3>ایجاد جدول با هم‌ترازی ستون‌ها</h3>
      <paragraph>
        شما می‌توانید ستون‌ها را به صورت چپ‌چین، راست‌چین یا وسط‌چین تنظیم کنید. این کار با استفاده از کولون‌ها (:) انجام می‌شود.
      </paragraph>
      <paragraph>
        <strong>چپ‌چین:</strong>
        کولون در سمت چپ خط تیره قرار می‌گیرد
      </paragraph>
      <paragraph>
        <strong>وسط‌چین:</strong>
        کولون در هر دو سمت خط تیره قرار می‌گیرد
      </paragraph>
      <paragraph>
        <strong>راست‌چین: </strong>
        کولون در سمت راست خط تیره قرار می‌گیرد
      </paragraph>
      <paragraph>مثال : </paragraph>
    <code-example :code="tableCenter">
      <table class="table table-responsive">
        <thead>
        <tr>
          <th style="text-align:left">سرستون 1</th>
          <th style="text-align:center">سرستون 2</th>
          <th style="text-align:right">سرستون 3</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td style="text-align:left">داده 1</td>
          <td style="text-align:center">داده 2</td>
          <td style="text-align:right">داده 3</td>
        </tr>
        <tr>
          <td style="text-align:left">داده 4</td>
          <td style="text-align:center">داده 5</td>
          <td style="text-align:right">داده 6</td>
        </tr>
        </tbody>
      </table>

    </code-example>
    </div>

  </doc-container>
</template>

<style scoped>

</style>