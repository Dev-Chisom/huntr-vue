import { ref } from 'vue';


const getJobs = () => {
    const jobs = ref([]);
    const error = ref(null);
    const load = async () => {
      try {
        await new Promise(resolve => {
          setTimeout(resolve, 2000)
      })
        let data = await fetch('https://vuejobs.com/api/jobs');
        if (!data.ok) {
          throw Error('no data available');
        }
        jobs.value = await data.json();
      } catch (err) {
        error.value = err.message;
        console.log(error.value);
      }
    };

    return {jobs,error,load}

}

export default getJobs