# Emlak Ofisi Yönetim Paneli

Tek bir emlak ofisinin günlük operasyonunu toplantı merkezli yöneten panel:
aksiyon ve karar takibi, müşteri/portföy tarihçe notları, yönetici için canlı özet.

> **Durum:** Sprint 0 — proje iskeleti kuruluyor.

## Teknoloji
- **Backend:** Java 21, Spring Boot 4.2, Spring Security, Spring Data JPA, Flyway, PostgreSQL 16
- **Frontend:** React, Vite, TypeScript, Tailwind (Sprint 0'da eklenecek)
- **Test:** JUnit 6, Testcontainers, ArchUnit, Vitest

## Mimari
Modüler monolit: tek JAR, modüller arası erişim yalnızca public facade ve DTO üzerinden.
Kurallar ArchUnit testleriyle otomatik denetlenir.

| Modül | Sorumluluk |
|---|---|
| `employee` | Çalışan kayıtları |
| `identity` | Hesap, giriş, oturum |
| `customer` | Müşteri referansı ve notları |
| `portfolio` | Portföy referansı ve notları |
| `followup` | Aksiyon, karar ve özet sayımlar |
| `meeting` | Toplantı kaydı ve arşiv |

## Gereksinimler
- JDK 21
- Docker (testler gerçek PostgreSQL'i Testcontainers ile başlatır)
- Node.js 24 (frontend)

## Testler
```powershell
.\mvnw.cmd test
```

## Ortam değişkenleri
`.env.example` dosyasına bakın. Gerçek değerler repoya girmez.

## Çalışma kuralları
- `main` korumalıdır; her değişiklik pull request ile girer.
- Dal adı: `s<sprint>-<story>-<konu>` (örn. `s0-1-readme`).
- Commit mesajı story numarasıyla başlar (örn. `S0-1: ...`).