import images from "./images";

// skills
const skills = [
    {
        title: "UI/UX DESIGN",
        value: "80%"
    },
    {
        title: "WEB DEVELOPMENT",
        value: "75%"
    },
    {
        title: "APP DEVELOPMENT",
        value: "45%"
    },
    {
        title: "MARKETING",
        value: "15%"
    },
];

// stats
const stats = [
    {
        img: `${images.icon_diamond}`,
        value:   "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit perspiciatis soluta facilis quia nam assumenda vel reiciendis! In culpa consequuntur mollitia ut rem? Consequatur dolorum minima suscipit aliquam adipisci ea?", // antes 548
        title: "projects completed"
    },
    {
        img: `${images.icon_fantasy}`,
        value: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit perspiciatis soluta facilis quia nam assumenda vel reiciendis! In culpa consequuntur mollitia ut rem? Consequatur dolorum minima suscipit aliquam adipisci ea?",//1465,
        title: "working hours"
    },
    {
        img: `${images.icon_star}`,
        value: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit perspiciatis soluta facilis quia nam assumenda vel reiciendis! In culpa consequuntur mollitia ut rem? Consequatur dolorum minima suscipit aliquam adipisci ea?", //612,
        title: "positive feedbacks"
    },
    {
        img: `${images.icon_phone}`,
        value: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit perspiciatis soluta facilis quia nam assumenda vel reiciendis! In culpa consequuntur mollitia ut rem? Consequatur dolorum minima suscipit aliquam adipisci ea?",//735,
        title: "happy clients"
    },
    {
        img: `${images.icon_console}`,
        value: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit perspiciatis soluta facilis quia nam assumenda vel reiciendis! In culpa consequuntur mollitia ut rem? Consequatur dolorum minima suscipit aliquam adipisci ea?",
        title: "SEO Ready"
    },
    {
        img: `${images.icon_plane}`,
        value: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit perspiciatis soluta facilis quia nam assumenda vel reiciendis! In culpa consequuntur mollitia ut rem? Consequatur dolorum minima suscipit aliquam adipisci ea?",
        title: "Support"
    }
];

// works
const works = [
  {
    img: `${images.work_1}`,
    title: "Technical aid"
  },
  {
    img: `${images.work_2}`,
    title: "secure access"
  },
  {
    img: `${images.work_3}`,
    title: "market research"
  },
  {
    img: `${images.work_4}`,
    title: "credit"
  },
  {
    img: `${images.work_5}`,
    title: "targeting"
  },
  {
    img: `${images.work_6}`,
    title: "insurance"
  },
  {
    img: `${images.work_7}`,
    title: "ecommerce"
  },
  {
    img: `${images.work_8}`,
    title: "office"
  }
]

// services
const services = [
    {
        img: `${images.service_1}`,
        title: "UI / UX DESIGN",
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.'
    },
    {
        img: `${images.service_2}`,
        title: "WEB DEVELOPMENT",
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.'
    },
    {
        img: `${images.service_3}`,
        title: "APP / MOBILE",
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.'
    },
    {
        img: `${images.service_4}`,
        title: "GAME DESIGN",
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.'
    },
    {
        img: `${images.service_5}`,
        title: "SEO / MARKETING",
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.'
    },
    {
        img: `${images.service_6}`,
        title: "PHOTOGRAPHY",
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.'
    },
    {
        img: `${images.service_5}`,
        title: "GRAPHIC DESIGN",
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.'
    },
    {
        img: `${images.service_6}`,
        title: "ILLUSTRATIONS",
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.'
    }
];

// testimonials
const testimonials = [
    {   
        img:  `${images.services_img_1}`,
        name: "Christine Troughton, BPTC Officer",
        text: "The staff and support are second to none. They are polished, proficient, accessible and patient.",
    },
    {   
        img:  `${images.services_img_2}`,
        name: "Michael Hopkins",
        text: "Outstanding job and exceeded all expectations. It was a pleasure to work with them on a sizable first project and am looking forward to start the next one asap."
    },
    {
        img:  `${images.services_img_3}`,
        name: "Terry Overacker",
        text: "We completed our product website with Dev.Point and are so excited to have it live!! It is so professionally done and eye appealing, not to mention how great it looks and works. We love how easy it is to make changes ourselves, yet know we have the support when/if we need it."
    },
    {
        img:  `${images.services_img_4}`,
        name: "Tim K. & Kristen H.",
        text: "When you choose Dev.Point you get a wonderful, professional team with innovative ideas, awesome customer service, and exactly what you're looking for. It took the ideas that we had and put them perfecly on the web."
    },

    {
        img:  `${images.services_img_5}`,
        name: "Tim K. & Kristen H.",
        text: "When you choose Dev.Point you get a wonderful, professional team with innovative ideas, awesome customer service, and exactly what you're looking for. It took the ideas that we had and put them perfecly on the web."
    }
];

const packages = [
    {
        type: "Basic",
        service_list: [
            "5 web sites",
            "15 emails",
            "5 MySQL databases",
            "10GB storage"
        ],
        price: "25"
    },
    {
        type: "Standard",
        service_list: [
            "15 web sites",
            "40 emails",
            "15 MySQL databases",
            "50GB storage"
        ],
        price: "50"
    },
    {
        type: "Premium",
        service_list: [
            "30 web sites",
            "50 emails",
            "40 MySQL databases",
            "100GB storage"
        ],
        price: "100"
    }
]

export default {skills, stats, works, services, testimonials, packages};
