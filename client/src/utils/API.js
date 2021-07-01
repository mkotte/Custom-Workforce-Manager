import axios from "axios";

export default {
    //gets current user for use in Admin verification
    getUser: function () {
        return axios.get("/api/user/current")
    },

    getJob: function () {
        return axios.get("/api/jobs")
    },

    //post data from CreateJob.js to api/jobs
    createJob: function (jobData) {
        return axios.post("/api/jobs", jobData)
    }
    //get jobs from api/jobs for display in JobsList.js

}
