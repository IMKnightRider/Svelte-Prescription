<script>
  // @ts-nocheck
  import "../../global.css";
  /** @type {import('./$types').PageData} */
  let _id;
  let verify = "Please Write Id";
  $: if (_id) {
    let a = JSON.parse(localStorage.getItem("presc")); // Prescription Array
    for (let i = 0;i < a.length; i++) {
      if (_id == a[i]["_id"]) {
        verify = "This is Verfied";
        break;
      } else {
        verify = "Not Verified";
      }
    }
  }
</script>

<h1>Check Your Prescription</h1>

<div class="discription" style="margin-top: 45px;">
  <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">
      Check Your Prescription By Writting Your Id
    </label>
    <input
      type="text"
      class="form-control"
      id="exampleFormControlInput1"
      placeholder="Prescription Id"
      bind:value={_id}
    />
  </div>

  <h2>{verify}</h2>
</div>
