const Chance = require('chance');
const chance = new Chance();
const client = [
  {
    email: chance.email(),
    name: chance.name(),
    password: chance.string({ length: 10 }),
    phoneNumber: chance.phone(),
    firebaseToken: chance.string({ length: 5 }),
  },
  {
    email: chance.email(),
    name: chance.name(),
    password: chance.string({ length: 10 }),
    phoneNumber: chance.phone(),
    firebaseToken: chance.string({ length: 5 }),
  },
  {
    email: chance.email(),
    name: chance.name(),
    password: chance.string({ length: 10 }),
    phoneNumber: chance.phone(),
    firebaseToken: chance.string({ length: 5 }),
  },
  {
    email: chance.email(),
    name: chance.name(),
    password: chance.string({ length: 10 }),
    phoneNumber: chance.phone(),
    firebaseToken: chance.string({ length: 5 }),
  },
  {
    email: chance.email(),
    name: chance.name(),
    password: chance.string({ length: 10 }),
    phoneNumber: chance.phone(),
    firebaseToken: chance.string({ length: 5 }),
  },
  {
    email: chance.email(),
    name: chance.name(),
    password: chance.string({ length: 10 }),
    phoneNumber: chance.phone(),
    firebaseToken: chance.string({ length: 5 }),
  },
];

const pro = [
  {
    email: chance.email(),
    name: chance.name(),
    password: chance.string({ length: 10 }),
    bio: chance.paragraph(),
    phoneNumber: chance.phone(),
    certBody: chance.word(),
    level: chance.integer({ min: 1, max: 4 }),
    resortId: chance.integer({ min: 1, max: 3 }),
  },
  {
    email: chance.email(),
    name: chance.name(),
    password: chance.string({ length: 10 }),
    bio: chance.paragraph(),
    phoneNumber: chance.phone(),
    certBody: chance.word(),
    level: chance.integer({ min: 1, max: 4 }),
    resortId: chance.integer({ min: 1, max: 3 }),
  },
  {
    email: chance.email(),
    name: chance.name(),
    password: chance.string({ length: 10 }),
    bio: chance.paragraph(),
    phoneNumber: chance.phone(),
    certBody: chance.word(),
    level: chance.integer({ min: 1, max: 4 }),
    resortId: chance.integer({ min: 1, max: 3 }),
  },
  {
    email: chance.email(),
    name: chance.name(),
    password: chance.string({ length: 10 }),
    bio: chance.paragraph(),
    phoneNumber: chance.phone(),
    certBody: chance.word(),
    level: chance.integer({ min: 1, max: 4 }),
    resortId: chance.integer({ min: 1, max: 3 }),
  },
  {
    email: chance.email(),
    name: chance.name(),
    password: chance.string({ length: 10 }),
    bio: chance.paragraph(),
    phoneNumber: chance.phone(),
    certBody: chance.word(),
    level: chance.integer({ min: 1, max: 4 }),
    resortId: chance.integer({ min: 1, max: 3 }),
  },
  {
    email: chance.email(),
    name: chance.name(),
    password: chance.string({ length: 10 }),
    bio: chance.paragraph(),
    phoneNumber: chance.phone(),
    certBody: chance.word(),
    level: chance.integer({ min: 1, max: 4 }),
    resortId: chance.integer({ min: 1, max: 3 }),
  },
];
const skill = [
  {
    skill: 'bumps',
  },
  {
    skill: 'beginner',
  },
  {
    skill: 'intermediate',
  },
  {
    skill: 'advanced',
  },
  {
    skill: 'freestyle',
  },
  {
    skill: 'off-piste',
  },
  {
    skill: 'carving',
  },
  {
    skill: 'trees',
  },
];

const clientsSkill = [
  {
    clientId: chance.integer({ min: 1, max: 5 }),
    skillId: chance.integer({ min: 1, max: 7 }),
  },
  {
    clientId: chance.integer({ min: 1, max: 5 }),
    skillId: chance.integer({ min: 1, max: 7 }),
  },
  {
    clientId: chance.integer({ min: 1, max: 5 }),
    skillId: chance.integer({ min: 1, max: 7 }),
  },
  {
    clientId: chance.integer({ min: 1, max: 5 }),
    skillId: chance.integer({ min: 1, max: 7 }),
  },
  {
    clientId: chance.integer({ min: 1, max: 5 }),
    skillId: chance.integer({ min: 1, max: 7 }),
  },
  {
    clientId: chance.integer({ min: 1, max: 5 }),
    skillId: chance.integer({ min: 1, max: 7 }),
  },
  {
    clientId: chance.integer({ min: 1, max: 5 }),
    skillId: chance.integer({ min: 1, max: 7 }),
  },
  {
    clientId: chance.integer({ min: 1, max: 5 }),
    skillId: chance.integer({ min: 1, max: 7 }),
  },
  {
    clientId: chance.integer({ min: 1, max: 5 }),
    skillId: chance.integer({ min: 1, max: 7 }),
  },
  {
    clientId: chance.integer({ min: 1, max: 5 }),
    skillId: chance.integer({ min: 1, max: 7 }),
  },
  {
    clientId: chance.integer({ min: 1, max: 5 }),
    skillId: chance.integer({ min: 1, max: 7 }),
  },
];
const prosSkill = [
  {
    proId: chance.integer({ min: 1, max: 5 }),
    skillId: chance.integer({ min: 1, max: 7 }),
  },
  {
    proId: chance.integer({ min: 1, max: 5 }),
    skillId: chance.integer({ min: 1, max: 7 }),
  },
  {
    proId: chance.integer({ min: 1, max: 5 }),
    skillId: chance.integer({ min: 1, max: 7 }),
  },
  {
    proId: chance.integer({ min: 1, max: 5 }),
    skillId: chance.integer({ min: 1, max: 7 }),
  },
  {
    proId: chance.integer({ min: 1, max: 5 }),
    skillId: chance.integer({ min: 1, max: 7 }),
  },
  {
    proId: chance.integer({ min: 1, max: 5 }),
    skillId: chance.integer({ min: 1, max: 7 }),
  },
  {
    proId: chance.integer({ min: 1, max: 5 }),
    skillId: chance.integer({ min: 1, max: 7 }),
  },
  {
    proId: chance.integer({ min: 1, max: 5 }),
    skillId: chance.integer({ min: 1, max: 7 }),
  },
  {
    proId: chance.integer({ min: 1, max: 5 }),
    skillId: chance.integer({ min: 1, max: 7 }),
  },
  {
    proId: chance.integer({ min: 1, max: 5 }),
    skillId: chance.integer({ min: 1, max: 7 }),
  },
  {
    proId: chance.integer({ min: 1, max: 5 }),
    skillId: chance.integer({ min: 1, max: 7 }),
  },
];
const review = [
  {
    clientId: chance.integer({ min: 1, max: 5 }),
    proId: chance.integer({ min: 1, max: 5 }),
    rating: chance.integer({ min: 1, max: 5 }),
    comment: chance.paragraph(),
  },
  {
    clientId: chance.integer({ min: 1, max: 5 }),
    proId: chance.integer({ min: 1, max: 5 }),
    rating: chance.integer({ min: 1, max: 5 }),
    comment: chance.paragraph(),
  },
  {
    clientId: chance.integer({ min: 1, max: 5 }),
    proId: chance.integer({ min: 1, max: 5 }),
    rating: chance.integer({ min: 1, max: 5 }),
    comment: chance.paragraph(),
  },
  {
    clientId: chance.integer({ min: 1, max: 5 }),
    proId: chance.integer({ min: 1, max: 5 }),
    rating: chance.integer({ min: 1, max: 5 }),
    comment: chance.paragraph(),
  },
  {
    clientId: chance.integer({ min: 1, max: 5 }),
    proId: chance.integer({ min: 1, max: 5 }),
    rating: chance.integer({ min: 1, max: 5 }),
    comment: chance.paragraph(),
  },
  {
    clientId: chance.integer({ min: 1, max: 5 }),
    proId: chance.integer({ min: 1, max: 5 }),
    rating: chance.integer({ min: 1, max: 5 }),
    comment: chance.paragraph(),
  },
  {
    clientId: chance.integer({ min: 1, max: 5 }),
    proId: chance.integer({ min: 1, max: 5 }),
    rating: chance.integer({ min: 1, max: 5 }),
    comment: chance.paragraph(),
  },
  {
    clientId: chance.integer({ min: 1, max: 5 }),
    proId: chance.integer({ min: 1, max: 5 }),
    rating: chance.integer({ min: 1, max: 5 }),
    comment: chance.paragraph(),
  },
  {
    clientId: chance.integer({ min: 1, max: 5 }),
    proId: chance.integer({ min: 1, max: 5 }),
    rating: chance.integer({ min: 1, max: 5 }),
    comment: chance.paragraph(),
  },
  {
    clientId: chance.integer({ min: 1, max: 5 }),
    proId: chance.integer({ min: 1, max: 5 }),
    rating: chance.integer({ min: 1, max: 5 }),
    comment: chance.paragraph(),
  },
];

module.exports = { client, pro, clientsSkill, skill, prosSkill, review };
