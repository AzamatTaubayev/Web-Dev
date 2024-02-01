// cmd/api/main.go

package main

import (
	"go-rest-api-example/internal/api"
	"log"
)

func main() {
	log.Println("starting API server")

	// Start the API server
	api.StartServer()
}
