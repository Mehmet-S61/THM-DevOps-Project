# 🛠️ THM DevOps Project – Webbasierte Anwendung

## 📋 Projektbeschreibung

Dieses Projekt demonstriert eine vollständige **DevOps-Infrastruktur** für eine einfache Node.js-Webanwendung.  
Ziel ist es, den kompletten Software-Lifecycle – von Entwicklung über Testing, Containerisierung, CI/CD bis hin zum Deployment in Kubernetes und Monitoring – **automatisiert und nachvollziehbar** abzubilden.

---

## 🚀 Features

- ✅ Node.js Webserver (`index.js`)
- ✅ Automatisierte Tests (`test.js`)
- ✅ CI/CD mit GitHub Actions
- ✅ Docker-Containerisierung
- ✅ Kubernetes Deployment (Minikube)
- ✅ Monitoring mit Grafana
- ✅ Linting mit ESLint

---

## 📁 Projektstruktur

```
📦 devops_project
├── .github/workflows/ci-cd.yml     # CI/CD-Pipeline
├── Dockerfile                      # Container Definition
├── index.js                        # Node.js Anwendung
├── test.js                         # Automatisierter Test
├── package.json / package-lock.json
├── k8s_deployment_local_aktuell.yaml
├── monitoring_setup.yaml           # Grafana Setup
└── README.md
```

---

## ⚙️ Installation & Lokales Testen

```bash
npm install
npm start
```

App läuft unter: [http://localhost:3000](http://localhost:3000)

Test ausführen:
```bash
npm test
```

---

## 🐳 Docker

### Image bauen:
```bash
docker build -t web-app:latest .
```

### Container starten:
```bash
docker run -p 3000:3000 web-app:latest
```

---

## ☸️ Kubernetes (lokal mit Minikube)

### Minikube starten:
```bash
minikube start --driver=docker
```

### Deployment anwenden:
```bash
kubectl apply -f k8s_deployment_local_aktuell.yaml
```

### App im Browser öffnen:
```bash
minikube service web-app-service
```

---

## 📈 Monitoring mit Grafana

### Monitoring-Setup starten:
```bash
kubectl apply -f monitoring_setup.yaml
```

### Grafana öffnen:
```bash
minikube service grafana-service
```

Standard-Login:
- **Benutzer:** `admin`
- **Passwort:** `admin` (falls nicht geändert)

---

## 🔁 CI/CD mit GitHub Actions

Die CI/CD-Pipeline startet automatisch bei jedem Push auf den `main`-Branch:

**CI:**
- Installiert Dependencies
- Führt automatisierte Tests (`test.js`) aus
- Prüft Codequalität mit ESLint

**CD:**
- Baut Docker-Image
- Pusht es zu DockerHub

---

## 🧪 Testskript

`test.js` prüft automatisch, ob die App auf Port 3000 erreichbar ist und korrekt mit Status 200 antwortet.

```bash
npm test
✅ Test erfolgreich: Webserver antwortet mit Status 200
```

---

## 🧠 Projektziel

Dieses Projekt ist Teil einer universitären Aufgabe zur **praktischen Anwendung von DevOps-Prinzipien**. Es zeigt, wie man eine vollständige DevOps-Pipeline prototypisch aufbauen, automatisieren und testen kann – von der Codezeile bis zum laufenden Container im Cluster.

---

## 📝 Autor

- **Name:** Gruppe 1
- **Studiengang:** THM – DevOps-Projekt  
- **Betreuer:** Prof. Dr. Thomas Farrenkopf

---
