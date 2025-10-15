// import arcjet, { tokenBucket } from "@arcjet/next";

// const aj = arcjet({
//   key: process.env.ARCJET_KEY,
//   characteristics: ["userId"], // Track based on Clerk userId
//   rules: [
//     // Rate limiting specifically for collection creation
//     tokenBucket({
//       mode: "LIVE",
//       refillRate: 10, // 10 collections
//       interval: 3600, // per hour
//       capacity: 10, // maximum burst capacity
//     }),
//   ],
// });

// export default aj;


import arcjet, { tokenBucket } from "@arcjet/next";

const aj = arcjet({
  key: process.env.ARCJET_KEY,
  characteristics: ["userId"], 
  rules: [
    tokenBucket({
      mode: process.env.NODE_ENV === "production" ? "LIVE" : "DRY_RUN",
      refillRate: 100,   
      interval: 60,      
      capacity: 200,    
    }),
  ],
});

export default aj;
