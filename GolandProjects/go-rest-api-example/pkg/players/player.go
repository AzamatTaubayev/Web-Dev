// pkg/players/player.go

package players

type Player struct {
	Number    int    `json:"number"`
	FirstName string `json:"first_name"`
	LastName  string `json:"last_name"`
}

func PrepareResponse() []Player {
	var players []Player

	var player Player
	player.Number = 1
	player.FirstName = "Manuel"
	player.LastName = "Neuer"
	players = append(players, player)

	player.Number = 9
	player.FirstName = "Harry"
	player.LastName = "Kane"
	players = append(players, player)

	player.Number = 25
	player.FirstName = "Thomas"
	player.LastName = "Muller"
	players = append(players, player)

	player.Number = 10
	player.FirstName = "Leroy"
	player.LastName = "Sane"
	players = append(players, player)

	return players
}
