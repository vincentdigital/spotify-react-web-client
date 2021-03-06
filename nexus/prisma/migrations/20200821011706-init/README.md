# Migration `20200821011706-init`

This migration has been generated by Vincent Oosterwijk at 8/21/2020, 1:17:06 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE `prisma`.`SpotifyTrack` (
`duration` int NOT NULL  ,`id` int NOT NULL  AUTO_INCREMENT,`spotifyId` varchar(191) NOT NULL  ,`title` varchar(191) NOT NULL  ,
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE UNIQUE INDEX `SpotifyTrack.spotifyId` ON `prisma`.`SpotifyTrack`(`spotifyId`)
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200821011706-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,64 @@
+datasource db {
+  provider = "mysql"
+  url = "***"
+}
+
+generator prisma_client_js {
+  provider = "prisma-client-js"
+}
+
+model SpotifyTrack {
+    id        Int      @default(autoincrement()) @id
+    spotifyId String   @unique
+    title     String
+    duration  Int
+}
+
+// model Blog {
+//   id        Int      @default(autoincrement()) @id
+//   createdAt DateTime @default(now())
+//   updatedAt DateTime @updatedAt
+//   name      String
+//   viewCount Int      @default(0)
+//   posts     Post[]
+//   authors   User[]
+// }
+
+// model User {
+//   id        Int      @default(autoincrement()) @id
+//   createdAt DateTime @default(now())
+//   updatedAt DateTime @updatedAt
+//   name      String?
+//   posts     Post[]
+//   blogId    Int?
+//   blog      Blog?    @relation(fields: [blogId], references: [id])
+//   rating    Float
+//   role      UserRole
+// }
+
+// enum UserRole {
+//   ADMIN
+//   AUTHOR
+// }
+
+// model Post {
+//   id     Int        @default(autoincrement()) @id
+//   title  String
+//   tags   Tag[]      @relation(references: [id])
+//   blogId Int?
+//   blog   Blog?      @relation(fields: [blogId], references: [id])
+//   status PostStatus
+//   User   User?      @relation(fields: [userId], references: [id])
+//   userId Int?
+// }
+
+// model Tag {
+//   id    Int    @default(autoincrement()) @id
+//   label String
+//   posts Post[] @relation(references: [id])
+// }
+
+// enum PostStatus {
+//   DRAFT
+//   PUBLISHED
+// }
```


