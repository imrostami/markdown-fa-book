<script setup lang="ts">
  const code = "```python " +
      "\n" +
      " def greet(name):\n" +
      "    print(f\"Hello, {name}!\")\n" +
      "\n" +
      "greet(\"Alice\")" +
      "\n" +
      "\n```"
</script>

<template>
  <DocContainer page-title="کد بلاک‌ها در Markdown">
    <div class="paragraph-container">
      <paragraph>
        کد بلاک‌ها (Code Blocks) برای نمایش قطعه‌های کد به صورت قالب‌بندی شده و با حفظ فرمت اولیه آن استفاده می‌شوند.
        Markdown دو روش اصلی برای ایجاد کد بلاک‌ها ارائه می‌دهد: کد بلاک‌های درون‌خطی (Inline Code) و کد بلاک‌های چندخطی
        (Multiline Code Blocks)
      </paragraph>
    </div>
    <div class="paragraph-container">
      <h3>کد بلاک‌های درون‌خطی (Inline Code)</h3>
      <paragraph>
        کد بلاک‌های درون‌خطی برای نمایش قطعه‌های کوتاه کد در داخل یک خط متن استفاده می‌شوند. برای این کار، کافی است کد
        مورد نظر خود را بین دو علامت بک‌تیک (`) قرار دهید.
      </paragraph>
      <paragraph>مثال:</paragraph>
      <code-example code='برای اجرای دستور `print("Hello, World!")` در پایتون، از این دستور استفاده کنید.'>
        <paragraph>
          برای اجرای دستور
          <code class="code-bubble">
            print("Hello, World!")
          </code>
          در پایتون، از این دستور استفاده کنید
        </paragraph>
      </code-example>
    </div>
    <div class="paragraph-container">
      <h3>کد بلاک‌های چندخطی (Multiline Code Blocks)</h3>
      <paragraph>
        کد بلاک‌های چندخطی برای نمایش قطعه‌های کد طولانی و چندخطی استفاده می‌شوند. برای ایجاد این نوع کد بلاک، می‌توانید از سه علامت بک‌تیک (```) یا تورفتگی چهار فاصله‌ای استفاده کنید.
      </paragraph>

      <code-example :code="code">
        <pre class="w-100 text-end">
          <code class="">
            :def greet(name)
            <p style="margin-left: 20px" class="mt-0 p-0 d-inline">print(f"Hello, {name}!")</p>

greet("Alice")
          </code>
        </pre>
      </code-example>

    </div>

    <div class="paragraph-container">
      <h3>برجسته‌سازی نحوی (Syntax Highlighting)</h3>
      <paragraph>بسیاری از ویرایشگرهای Markdown و سیستم‌های مدیریت محتوا از برجسته‌سازی نحوی برای کد بلاک‌ها پشتیبانی می‌کنند. برای فعال کردن این قابلیت، زبان برنامه‌نویسی را پس از سه علامت بک‌تیک مشخص کنید.</paragraph>
    </div>
  </DocContainer>
</template>

<style scoped>

</style>