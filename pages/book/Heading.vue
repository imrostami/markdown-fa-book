<script setup>

  const lang = "language-markdown";
</script>

<template>
  <DocContainer page-title="کار با Heading ها">
    <div class="paragraph-container">
      <Paragraph>Heading
        در Markdown
        امکانیه برای نوشتن و تایتل بندی بخش های مختلف متن که به شکل مرسومی در زبان مارکاپی مثل Html هم این عمل به وسیله تگ های خانواده h (H1-H6)
        هستند صورت میگیره
        اما نوشتن Heading در مارکداون بسیار ساده است
        فقط کافیه که محتوای خودتون رو مقابل عبارت # قرار بدید تا یک Heading برای شما ایجاد بشه
      </Paragraph>
    </div>

    <div class="paragraph-container">
      <Paragraph>
        <h3 class="fw-bold">سایز بندی در Heading ها</h3>
        <Paragraph>
          خانواده هدینگ ها در Markdown به 6 دسته تقسیم می شوند
          که توی ادامه قطعه کد به همراه نمونه اون آورده شده
          فقط دقت باشید که بین علامت
          <code> # </code>
          و محتوای شما یک فاصله باید وجود داشته باشه تا Parser مارکداون بتونه اون چیزی که شما نوشتین رو ترجمه کنه
          این موضوع توی باقی جاها هم صادقه پس ما بین علائم و محتوایی که میخواین بنویسید یک فاصله قائل باشید :)
        </Paragraph>


      <div class="container">

        <div class="heading-exam row">
          <div class="exam-section col-md-6 col-sm-12">
            <h1 class="d-block">Heading 1</h1>
          </div>
          <CodeBlock :lang="lang" code="# Heading 1" class="col-md-6 col-sm-12"/>
        </div>

        <div class="heading-exam row">
          <div class="exam-section col-md-6 col-sm-12">
            <h2 class="d-block">Heading 2</h2>
          </div>
          <CodeBlock :lang="lang" code="## Heading 2" class="col-md-6 col-sm-12"/>
        </div>

        <div class="heading-exam row">
          <div class="exam-section col-md-6 col-sm-12">
            <h3 class="d-block">Heading 3</h3>
          </div>
          <CodeBlock :lang="lang" code="### Heading 3" class="col-md-6 col-sm-12"/>
        </div>

        <div class="heading-exam row">
          <div class="exam-section col-md-6 col-sm-12">
            <h4 class="d-block">Heading 4</h4>
          </div>
          <CodeBlock :lang="lang" code="#### Heading 4" class="col-md-6 col-sm-12"/>
        </div>

        <div class="heading-exam row">
          <div class="exam-section col-md-6 col-sm-12">
            <h5 class="d-block">Heading 5</h5>
          </div>
          <CodeBlock :lang="lang" code="##### Heading 5" class="col-md-6 col-sm-12"/>
        </div>

        <div class="heading-exam row">
          <div class="exam-section col-md-6 col-sm-12">
            <h6 class="d-block">Heading 6</h6>
          </div>
          <CodeBlock :lang="lang" code="###### Heading 6" class="col-md-6 col-sm-12"/>
        </div>




      </div>

        <Paragraph>
          چیزی که
          <strong class="text-decoration-underline"> بسیار حائز اهمیته</strong>
          اینه که مینیم سایز هدینگ ها یک و ماکزیمم اون ها 6 هست ینی اگه بخوایم از
        <code class="code-bubble">My Heading Content #######</code>
          استفاده کنیم غلطه و برامون چیزی نشون داده نخواهد شد
        </Paragraph>


      </Paragraph>
    </div>

  </DocContainer>
</template>

<style scoped>
  .exam-section{
    display: flex;
    align-items: center;
  }
  h1,h2,h3,h4,h5,h6{
    margin: 0;
    width: 100%;
    padding-block: 3px;
  }
</style>

