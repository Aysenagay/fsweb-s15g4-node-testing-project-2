/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const defaultGorevler = [{ Adi: "Kilo Al", Aciklama: "Şişko Ol" }];
const defaultTasklar = [
  { Adi: "Evde Otur", Aciklama: "Evde patlamış mısır ye", GorevId: 1 },
  { Adi: "Sağlıklı Beslen", Aciklama: "Meyve Ye", GorevId: 1 },
];
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("Tasklar").truncate();
  await knex("Gorevler").truncate();

  await knex("Gorevler").insert(defaultGorevler);
  await knex("Tasklar").insert(defaultTasklar);
};
