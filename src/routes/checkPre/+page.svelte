<script>
  // @ts-nocheck
  import "../../global.css";
  /** @type {import('./$types').PageData} */
  let _id;
  let verify = "Please Write Id";
  let medicine = []
  let yes = false;
  $: if (_id) {
     // Prescription Array
    let a = JSON.parse(localStorage.getItem("presc"))
    for (let i = 0; i < a.length; i++) {
      if (_id == a[i]["_id"]) {
        verify = "This is Verfied";
        yes = true;
        medicine = a[i]["medic"]
        console.log(medicine)
        break;
      } else {
        yes = false;
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

  {#if yes}
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Quantity</th>
        <th scope="col">Dose</th>
      </tr>
    </thead>
    <tbody>
      {#each medicine as medicine, i}
        <tr>
        <th scope="row">{i+1}</th>
        <td>{medicine.name}</td>
        <td>{medicine.quantity}</td>
        <td>{medicine.dose}</td>
      </tr>
      {/each}
      
    </tbody>
  </table>
  {/if}

  <h2>{verify}</h2>
</div>
