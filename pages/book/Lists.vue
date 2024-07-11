<script setup>
const complexList = `1. مورد اول
2. مورد دوم
    - زیرمورد غیر ترتیبی اول
    - زیرمورد غیر ترتیبی دوم
3. مورد سوم
`;

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
 const orderedListCode = `
1. مورد اول
2. مورد دوم
3. مورد سوم

    `

const taskLIst = `- [ ] تسک اول
- [x] تسک دوم
- [ ] تسک سوم
`

useSeoMeta({
  author: 'محمد داداش رستمی',
  title: 'راهنمای جامع Markdown - راهنمای ایجاد لیست ها در Markdown',
  ogTitle: 'راهنمای جامع Markdown -  راهنمای ایجاد لیست ها در Markdown',
  description: 'در این راهنما به شما توضیح می‌دهیم که چگونه می‌توانید از لیست ها در Markdown استفاده کنید و به راحتی لیست های مرتب، نامرتب و تو در تو را بسازید. Markdown یکی از روش‌های ساده برای ساخت لیست های مختلف است که امکان بهبود سازماندهی محتوای شما را فراهم می‌آورد.',
  ogDescription: 'در این راهنما به شما توضیح می‌دهیم که چگونه می‌توانید از لیست ها در Markdown استفاده کنید و به راحتی لیست های مرتب، نامرتب و تو در تو را بسازید. با استفاده از Markdown، می‌توانید به راحتی ساختاردهی به متن خود بدهید و محتوای خود را بهبود دهید.',
  ogImage: 'https://cdn.icon-icons.com/icons2/1377/PNG/512/textxmarkdown_92778.png',
  robots: 'index, follow',
  colorScheme: 'dark light',
  charset: 'utf-8',
  keywords: 'Markdown, راهنمای Markdown, آموزش Markdown, لیست ها در Markdown, ساخت لیست ها در Markdown,راهنمای ایجاد لیست ها در Markdown,ایجاد لیست در Markdown, مرتب و نامرتب, زبان نشانه‌گذاری'
});

</script>

<template>
  <DocContainer page-title="لیست ها در Markdown">
    <div class="paragraph-container">
      <paragraph>
        Markdown به شما امکان ایجاد دو نوع لیست را می‌دهد: لیست‌های غیر ترتیبی (Bulleted Lists) و لیست‌های ترتیبی (Numbered Lists). هر یک از این لیست‌ها برای مقاصد خاصی مفید هستند و به شما کمک می‌کنند اطلاعات خود را به صورت منظم و خوانا نمایش دهید.
      </paragraph>
    </div>
    <div class="paragraph-container">
      <h3>لیست‌های نشانه‌دار (غیرترتیبی)</h3>
      <paragraph>
        لیست‌های غیر ترتیبی برای مواردی که ترتیب آنها اهمیت ندارد، استفاده می‌شوند. برای ایجاد این نوع لیست، می‌توانید از علامت‌های
        <code class="code-bubble">-</code>
        یا
        <code class="code-bubble">*</code>
        یا
        <code class="code-bubble">+</code>
        استفاده کنید. هر یک از این علامت‌ها را در ابتدای هر مورد قرار دهید. به طور مثال:

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


      <div class="paragraph-container">
        <paragraph>و یا به این صورت :</paragraph>
      </div>
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
        لیست‌های ترتیبی در Markdown برای نمایش مواردی که دارای ترتیب خاصی هستند، مانند مراحل انجام یک کار، استفاده می‌شود. برای ایجاد لیست‌های ترتیبی، می‌توانید از اعداد و نقطه استفاده کنید. Markdown به طور خودکار اعداد را در ترتیب صحیح قرار می‌دهد، حتی اگر شما به ترتیب صحیح آنها را ننویسید.
        برای ایجاد لیست شماره‌گذاری شده از اعداد به همراه یک نقطه و یک فاصله استفاده می‌کنیم. مثال:
      </paragraph>
      <CodeExample :code="orderedListCode">
        <ol>
          <li>مورد اول</li>
          <li>مورد دوم</li>
          <li>مورد سوم</li>
        </ol>

      </CodeExample>
    </div>

    <div class="paragraph-container">
      <h3>ترکیب لیست‌های ترتیبی و غیر ترتیبی</h3>
      <paragraph>شما همچنین می‌توانید لیست‌های ترتیبی را با لیست‌های غیر ترتیبی ترکیب کنید:
      </paragraph>
      <CodeExample :code="complexList">
        <ol>
          <li>مورد اول</li>
          <li>مورد دوم<ul>
            <li>زیرمورد غیر ترتیبی اول</li>
            <li>زیرمورد غیر ترتیبی دوم</li>
          </ul>
          </li>
          <li>مورد سوم</li>
        </ol>

      </CodeExample>
    </div>

    <div class="paragraph-container">
      <h3>لیست وظایف (Task Lists)</h3>
      <paragraph>
        لیست وظایف (Task Lists) یک نوع لیست خاص در Markdown است که به شما امکان می‌دهد تا وضعیت انجام وظایف را نمایش دهید. این نوع لیست‌ها معمولاً در مستندات پروژه‌ها و ابزارهای مدیریت وظایف استفاده می‌شوند.
      </paragraph>
      <paragraph>
        برای ایجاد لیست وظایف، از علامت چک‌باکس (checkbox) استفاده می‌شود. چک‌باکس‌ها با ترکیب یک جفت براکت ([ ]) برای وظایف انجام نشده و یک جفت براکت با علامت تیک ([x]) برای وظایف انجام شده نمایش داده می‌شوند. هر وظیفه در یک خط جداگانه نوشته می‌شود. به عنوان مثال:
      </paragraph>

    <CodeExample :code="taskLIst">
      <ul>
        <li>
          <input type="checkbox" disabled>
          تسک اول</li>
        <li><input disabled type="checkbox" checked>
          تسک دوم</li>
        <li><input disabled type="checkbox">
          تسک سوم</li>
      </ul>

    </CodeExample>
    </div>

    <div class="paragraph-container">
      <h3>نکات تکمیلی</h3>
      <paragraph>
        <strong>تورفتگی مناسب:</strong>

        برای زیرلیست‌ها، معمولاً از چهار فاصله استفاده می‌شود. اما می‌توانید بسته به نیاز خود از تعداد دیگری فاصله نیز استفاده کنید.
      </paragraph>
      <paragraph>
        <strong>علامت‌های متفاوت:</strong>
        استفاده از علامت‌های مختلف در لیست‌های غیر ترتیبی تاثیری در نمایش آنها ندارد. همه به یک شکل نمایش داده می‌شوند.
      </paragraph>
      <paragraph>
        <strong>ترکیب لیست‌ها:</strong>
        ترکیب لیست‌های ترتیبی و غیر ترتیبی به شما امکان می‌دهد ساختارهای پیچیده‌تری ایجاد کنید که می‌تواند به خوانایی و سازمان‌دهی اطلاعات کمک کند.

      </paragraph>
    </div>

  </DocContainer>
</template>

<style scoped>

</style>