<script>
  // @ts-nocheck



  let docName; // Doctor name for binding
  let docBio; // Doctor Bio for Binding
  let docPass; // Doctor Password for binding
  let doctors = [];

  const addDoctor = (name, bio, pass) => {
    doctors.push({ dname: name, dbio: bio, pass: pass })
    localStorage.setItem("doctor", JSON.stringify(doctors))
  };
</script>

<h1>Login</h1>

<h2>Name of Doctor:</h2>
<input type="text" bind:value={docName} />

<h2>Bio</h2>
<input type="text" bind:value={docBio} />

<h3>Password</h3>
<input type="Password" bind:value={docPass} />

<button
  on:click={() => addDoctor(docName, docBio, docPass) }
  >Login</button
>
