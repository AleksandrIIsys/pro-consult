const uri = process.env.REACT_APP_API_URL;
export const fetchAuth = async (data) => {
    const resualt = await fetch(`${uri}/api/auth/`, {
        method: "POST",
        body: data,
    });
    return resualt;
};
export const fetchCheckValidKey = async (data) => {
    const resualt = await fetch(`${uri}/api/auth/key`, {
        method: "POST",
        body: data,
    })
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            return res.result;
        });
    return resualt;
};
export const fetchNews = async () => {
    const data = await fetch(`${uri}/api/news/`).then((response) => {
        return response.json();
    });
    return data;
};

export const fetchPartners = async () => {
    const data = await fetch(`${uri}/api/partners/`).then((response) => {
        return response.json();
    });
    return data;
};
export const fetchClients = async () => {
    const data = await fetch(`${uri}/api/clients/`).then((response) => {
        return response.json();
    });
    return data;
};
export const fetchCareers = async () => {
    const data = await fetch(`${uri}/api/careers/`).then((response) => {
        return response.json();
    });
    return data;
};
export const fetchTestimonials = async () => {
    let data = await fetch(`${uri}/api/testimonials/`).then((response) => {
        return response.json();
    });
    return data;
};
export const createTestimonial = async (data) => {
    const resualt = await fetch(`${uri}/api/testimonials/`, {
        method: "POST",
        body: data,
    });
    return resualt;
};
export const createCareers = async (data) => {
    const resualt = await fetch(`${uri}/api/careers/`, {
        method: "POST",
        body: data,
    });
    return resualt;
};
export const deleteTestimonial = async (data) => {
    let resualt = await fetch(`${uri}/api/testimonials/delete`, {
        method: "POST",
        body: data,
    });
    return resualt;
};
export const deleteCareers = async (data) => {
    let resualt = await fetch(`${uri}/api/careers/delete`, {
        method: "POST",
        body: data,
    });
    return resualt;
};
export const editTestimonial = async (data) => {
    let resualt = await fetch(`${uri}/api/testimonials/edit/`, {
        method: "POST",
        body: data,
    });
    return resualt;
};
export const editCareers = async (data) => {
    let resualt = await fetch(`${uri}/api/careers/edit/`, {
        method: "POST",
        body: data,
    });
    return resualt;
};
export const createNews = async (data) => {
    const resualt = await fetch(`${uri}/api/news/`, {
        method: "POST",
        body: data,
    });
    return resualt;
};
export const deleteNews = async (data) => {
    let resualt = await fetch(`${uri}/api/news/delete`, {
        method: "POST",
        body: data,
    });
    return resualt;
};
export const editNews = async (data) => {
    let resualt = await fetch(`${uri}/api/news/edit/`, {
        method: "POST",
        body: data,
    });
    return resualt;
};
export const createClient = async (data) => {
    const resualt = await fetch(`${uri}/api/clients/`, {
        method: "POST",
        body: data,
    });
    return resualt;
};
export const deleteClient = async (data) => {
    let resualt = await fetch(`${uri}/api/clients/delete`, {
        method: "POST",
        body: data,
    });
    return resualt;
};
export const editClient = async (data) => {
    let resualt = await fetch(`${uri}/api/clients/edit/`, {
        method: "POST",
        body: data,
    });
    return resualt;
};

export const fetchCourse = async () => {
    const data = await fetch(`${uri}/api/courses/`).then((response) => {
        return response.json();
    });
    return data;
};
export const createCourse = async (data) => {
    const resualt = await fetch(`${uri}/api/courses/`, {
        method: "POST",
        body: data,
    });
    return resualt;
};
export const deleteCourse = async (data) => {
    let resualt = await fetch(`${uri}/api/courses/delete`, {
        method: "POST",
        body: data,
    });
    return resualt;
};
export const editCourse = async (data) => {
    let resualt = await fetch(`${uri}/api/courses/edit/`, {
        method: "POST",
        body: data,
    });
    return resualt;
};
export const createPartner = async (data) => {
    const resualt = await fetch(`${uri}/api/partners/`, {
        method: "POST",
        body: data,
    });
    return resualt;
};
export const deletePartner = async (data) => {
    let resualt = await fetch(`${uri}/api/partners/delete`, {
        method: "POST",
        body: data,
    });
    return resualt;
};
export const editPartner = async (data) => {
    let resualt = await fetch(`${uri}/api/partners/edit/`, {
        method: "POST",
        body: data,
    });
    return resualt;
};
export const fetchProject = async () => {
    const data = await fetch(`${uri}/api/project/`).then((response) => {
        return response.json();
    });
    return data;
};
export const createProject = async (data) => {
    const resualt = await fetch(`${uri}/api/project/`, {
        method: "POST",
        body: data,
    });
    return resualt;
};
export const deleteProject = async (data) => {
    let resualt = await fetch(`${uri}/api/project/delete`, {
        method: "POST",
        body: data,
    });
    return resualt;
};
export const editProject = async (data) => {
    let resualt = await fetch(`${uri}/api/project/edit/`, {
        method: "POST",
        body: data,
    });
    return resualt;
};
export const fetchSlider = async () => {
    const data = await fetch(`${uri}/api/slider/`).then((response) => {
        return response.json();
    });
    return data;
};
export const createSlider = async (data) => {
    const resualt = await fetch(`${uri}/api/slider/`, {
        method: "POST",
        body: data,
    });
    return resualt;
};
export const deleteSlider = async (data) => {
    let resualt = await fetch(`${uri}/api/slider/delete`, {
        method: "POST",
        body: data,
    });
    return resualt;
};
export const editSlider = async (data) => {
    let resualt = await fetch(`${uri}/api/slider/edit/`, {
        method: "POST",
        body: data,
    });
    return resualt;
};