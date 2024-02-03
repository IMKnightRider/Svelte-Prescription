<script>
// @ts-nocheck

    /** @type {import('./$types').PageData} */
    let _id ;
    let verify = "Write Here To check";
    $: if(_id){
        let a = JSON.parse(localStorage.getItem("presc"))
        if(_id == a[1]["_id"]){
            verify = "This is Verfied";
            
        }
        else{
            verify = "Not Verified";
        }
    }
</script>

<h1>Check Your Prescription</h1>

<h2>id</h2>

<input type="text" bind:value={_id} style="width: 500px;" placeholder="Write Here Your Id to Check if prescription is Verified">

<h2>{verify}</h2>