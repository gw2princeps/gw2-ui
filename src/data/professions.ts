export type ProfessionTypes =
  | 'Guardian'
  | 'Dragonhunter'
  | 'Firebrand'
  | 'Willbender'
  | 'Revenant'
  | 'Herald'
  | 'Renegade'
  | 'Vindicator'
  | 'Warrior'
  | 'Berserker'
  | 'Spellbreaker'
  | 'Bladesworn'
  | 'Engineer'
  | 'Scrapper'
  | 'Holosmith'
  | 'Mechanist'
  | 'Ranger'
  | 'Druid'
  | 'Soulbeast'
  | 'Untamed'
  | 'Thief'
  | 'Daredevil'
  | 'Deadeye'
  | 'Specter'
  | 'Elementalist'
  | 'Tempest'
  | 'Weaver'
  | 'Catalyst'
  | 'Mesmer'
  | 'Chronomancer'
  | 'Mirage'
  | 'Virtuoso'
  | 'Necromancer'
  | 'Reaper'
  | 'Scourge'
  | 'Harbinger';

const PROFESSIONS: Record<string, string[]> = {
  Guardian: ['Dragonhunter', 'Firebrand', 'Willbender'],
  Revenant: ['Herald', 'Renegade', 'Vindicator'],
  Warrior: ['Berserker', 'Spellbreaker', 'Bladesworn'],
  Engineer: ['Scrapper', 'Holosmith', 'Mechanist'],
  Ranger: ['Druid', 'Soulbeast', 'Untamed'],
  Thief: ['Daredevil', 'Deadeye', 'Specter'],
  Elementalist: ['Tempest', 'Weaver', 'Catalyst'],
  Mesmer: ['Chronomancer', 'Mirage', 'Virtuoso'],
  Necromancer: ['Reaper', 'Scourge', 'Harbinger'],
};
export default PROFESSIONS;