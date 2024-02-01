// internal/api/api.go

package api

import (
	"encoding/json"
	"fmt"
	"github.com/gorilla/mux"
	"go-rest-api-example/pkg/players"
	"log"
	"net/http"
	"strconv"
)

type Response struct {
	Players []players.Player `json:"players"`
}

func StartServer() {
	// Create a new router
	router := mux.NewRouter()

	// Specify endpoints
	router.HandleFunc("/health-check", HealthCheck).Methods("GET")
	router.HandleFunc("/players", Players).Methods("GET")
	router.HandleFunc("/players/{number}", PlayerInfo).Methods("GET")

	// Start and listen to requests
	http.Handle("/", router)
	log.Fatal(http.ListenAndServe(":8080", router))
}

func HealthCheck(w http.ResponseWriter, r *http.Request) {
	log.Println("entering health check end point")
	w.WriteHeader(http.StatusOK)
	fmt.Fprintf(w, "Author is Taubayev Azamat, my app is showing some players of FC Bayern Munchen")
}

func Players(w http.ResponseWriter, r *http.Request) {
	log.Println("entering players end point")
	var response Response
	players := players.PrepareResponse()

	response.Players = players

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	jsonResponse, err := json.Marshal(response)
	if err != nil {
		return
	}

	w.Write(jsonResponse)
}

func PlayerInfo(w http.ResponseWriter, r *http.Request) {
	log.Println("entering player info end point")
	vars := mux.Vars(r)
	playerNumber, err := strconv.Atoi(vars["number"])
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		fmt.Fprintf(w, "Invalid player number")
		return
	}

	pResponse := players.PrepareResponse()

	var foundPlayer *players.Player
	for _, p := range pResponse {
		if p.Number == playerNumber {
			foundPlayer = &p
			break
		}
	}

	if foundPlayer == nil {
		w.WriteHeader(http.StatusNotFound)
		fmt.Fprintf(w, "Player with number %d not found", playerNumber)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	jsonResponse, err := json.Marshal(foundPlayer)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		fmt.Fprintf(w, "Error marshalling player info")
		return
	}

	w.Write(jsonResponse)
}
