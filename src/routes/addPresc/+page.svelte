<script>
  // @ts-nocheck

  let prescription = []; // having prescription
  let _id; // Doctor name for binding
  let patientName; // Doctor Bio for Binding
  let medicines; // Doctor Password for binding

  const addPresc = (id, patient, medicines) => {
    let b = JSON.parse(localStorage.getItem("doctor"))
    console.log();
    prescription.push({
      _id: id,
      docName: b[0]["dname"],
      patName: patient,
      medic: medicines,
    });
    localStorage.setItem("presc", JSON.stringify(prescription));
  };
</script>

<h1>Prescription</h1>

<h2>Name of Patient:</h2>
<input type="text" bind:value={patientName} />

<h2>Id</h2>
<input type="text" bind:value={_id} />

<h3>Medicines</h3>
<textarea bind:value={medicines} />
<br>
<br>
<button on:click={() => addPresc(_id, patientName, medicines)}>Add Prescription</button>
