<script>
  import GamesCategorySection from "../../widgets/ui/GamesCategorySection.svelte";
  export let data;

  console.log(data);


</script>

<GamesCategorySection games={data.allGamesList.it} categoryTitle='Games from the IT Universe'/>



<!--
<div class="artboard phone-1">
  <div class="flex flex-col">
    <div class="form-control">
      <label class="label cursor-pointer">
        <span class="label-text">Remember me</span>
        <input
          type="checkbox"
          class="toggle toggle-success toggle-lg"
          checked
        />
      </label>
    </div>
    <div class="form-control">
      <label class="label cursor-pointer">
        <span class="label-text">Remember me</span>
        <input
          type="checkbox"
          class="toggle toggle-warning toggle-lg"
          checked
        />
      </label>
    </div>
    <div class="form-control">
      <label class="label cursor-pointer">
        <span class="label-text">Remember me</span>
        <input type="checkbox" class="toggle toggle-info toggle-lg" checked />
      </label>
    </div>
    <div class="form-control">
      <label class="label cursor-pointer">
        <span class="label-text">Remember me</span>
        <input type="checkbox" class="toggle toggle-error toggle-lg" checked />
      </label>
    </div>
  </div>
</div> -->


