delete from team_junction
where hero_id = $1
and team_id = $2;

SELECT
heroes.*
FROM heroes
join team_junction on(heroes.id = team_junction.hero_id)
where team_junction.team_id = $2;